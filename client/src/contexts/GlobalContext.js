import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";

import api from "../services/api";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import filesize from "filesize";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const [sortType, setSortType] = useState("name");
  const [uploadedFile, setUploadedFile] = useState([]);

  /* useEffect(() => {
    api.get("posts").then((response) => {
      const postFormatted = response.data.map((post) => {
        return {
          ...post,
          id: post._id,
          preview: post.url,
          readableSize: filesize(post.size),
          file: null,
          error: false,
          uploaded: true,
        };
      });

      setUploadedFile(postFormatted);
    });
  }, []); */

  useEffect(() => {
    return () => {
      uploadedFile.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });

  const updateFile = useCallback((id, data) => {
    setUploadedFile((state) =>
      state.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  }, []);

  const processUpload = useCallback(
    (uploadedFile) => {
      const data = new FormData();
      if (uploadedFile.file) {
        data.append("file", uploadedFile.file, uploadedFile.name);
      }

      api
        .post("posts", data, {
          onUploadProgress: (progressEvent) => {
            let progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            console.log(
              `A imagem ${uploadedFile.name} est√° ${progress}% carregada... `
            );

            updateFile(uploadedFile.id, { progress });
          },
        })
        .then((response) => {
          console.log(
            `A imagem ${uploadedFile.name} j√° foi enviada para o servidor!`
          );

          updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data._id,
            url: response.data.url,
          });
        })
        .catch((err) => {
          console.error(
            `Houve um problema para fazer upload da imagem ${uploadedFile.name} no servidor AWS`
          );
          console.log(err);

          updateFile(uploadedFile.id, {
            error: true,
          });
        });
    },
    [updateFile]
  );

  const handleUpload = useCallback(
    (files) => {
      const newUploadedFiles = files.map((file) => ({
        file,
        id: uuidv4(),
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: "",
      }));

      // concat é mais performático que ...spread
      // https://www.malgol.com/how-to-merge-two-arrays-in-javascript/
      setUploadedFile((state) => state.concat(newUploadedFiles));
      newUploadedFiles.forEach(processUpload);
    },
    [processUpload]
  );

  const deleteFile = useCallback((id) => {
    api.delete(`posts/${id}`);
    setUploadedFile((state) => state.filter((file) => file.id !== id));
  }, []);

  // ================ FILTER ================
  function changeCheck(event) {
    const check = event.target.checked;
    console.log(check);
    setChecked(check);
  }

  // ================ REMOVE UM PERFIL ================
  async function removeProfile(id) {
    const response = await api.delete(`/profiles/${id}`);

    if (response.status === 200) {
      const newArrProfile = profiles.filter((profile) => profile.id !== id);
      setProfiles(newArrProfile);
      return toast.success("Perfil removido com sucesso!");
    } else {
      return toast.error("Não foi possível remover esse perfil.");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        profiles,
        setProfiles,
        checked,
        changeCheck,
        sortType,
        setSortType,
        removeProfile,
        uploadedFile,
        deleteFile,
        handleUpload,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useFiles must be used within FileProvider");
  }

  return context;
}
