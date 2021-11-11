import { useState, useEffect, useCallback } from "react";
import { default as MainDropzone } from "react-dropzone";
import { Box } from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteForever from "@material-ui/icons/DeleteForever";

import styles from "./Dropzone.module.scss";

export default function Dropzone({
  handleAvatarDrop,
  onChange = () => {},
  ...props
}) {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCurrentFile(undefined);
    }, 3000);
  }, [currentFile]);

  useEffect(() => {
    onChange(files);
  }, [files, onChange]);

  function handleConvertSizeFile(fileSize) {
    const size = ["Bytes", "KB", "MB", "GB", "TB"];
    if (fileSize === 0) return "0 Byte";
    const _fileSize = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));
    return (
      Math.round(fileSize / Math.pow(1024, _fileSize), 2) +
      " " +
      size[_fileSize]
    );
  }

  function handleRemoveFile(indexFile) {
    const handleFiles = files.filter((file, index) => index !== indexFile);
    return setFiles(handleFiles);
  }

  const handleOnDrop = useCallback(
    (acceptedFiles) => {
      error && setError(false);
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => setError(true);
        reader.onerror = () => setError(true);
        reader.onload = (event) => {
          setCurrentFile(file);
          setFiles((files) => [
            ...files,
            {
              ...file,
              size: event.total,
              base64: event.target.result.match(/(?<=base64,).*/gi)[0],
            },
          ]);
          handleAvatarDrop({
            ...file,
            size: event.total,
            base64: event.target.result.match(/(?<=base64,).*/gi)[0],
          });
        };
        reader.readAsDataURL(file);
      });
    },
    [error, handleAvatarDrop]
  );

  return (
    <>
      {files.length === 0 && (
        <MainDropzone onDrop={handleOnDrop} {...props}>
          {({ getRootProps, getInputProps }) => (
            <Box className={styles.dropContainer} {...getRootProps()}>
              <BackupIcon />
              <input {...getInputProps()} />
              <p>Arraste aqui o arquivo ou clique para selecionar</p>
              {currentFile && (
                <p color="success">
                  <CheckCircleIcon />
                  <span>Você carregou, </span>
                  <b>{currentFile?.name}</b>
                </p>
              )}
              {error && (
                <p color="error">
                  <ErrorIcon /> Ops, tivemos algum problema ao carregar seu
                  arquivo. Por favor, tente novamente.
                </p>
              )}
            </Box>
          )}
        </MainDropzone>
      )}
      {files && files.length > 0 ? (
        <>
          {files.map((file, index) => (
            <Box key={index} className={styles.dropContainer}>
              <span>{file.path}</span>
              <span>{handleConvertSizeFile(file.size)}</span>
              <DeleteForever onClick={() => handleRemoveFile(index)} />
            </Box>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
