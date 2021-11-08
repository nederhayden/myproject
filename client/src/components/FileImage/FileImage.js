import { useFiles } from "../../contexts/GlobalContext";
import { Container, FileInfo, Preview } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink, MdMoodBad } from "react-icons/md";

const FileImage = () => {
  const { uploadedFile: files, deleteFile } = useFiles();

  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                {!!uploadedFile.url && (
                  <button onClick={(e) => deleteFile(uploadedFile.id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#70ff38" },
                }}
                strokeWidth={10}
                value={60}
              />
            )}

            {uploadedFile.url && (
              <a
                href="https://avatars.githubusercontent.com/u/33813497?s=96&v=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="##70ff38" />
            )}
            {uploadedFile.error && <MdError size={24} color="red" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default FileImage;
