import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./Upload.module.scss";

export default function Upload() {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: ["image/jpeg", "image/pjpeg", "image/png"],
      // onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <p> Arraste a imagem aqui...</p>;
    }

    if (isDragReject) {
      return <p type="error">Tipo de arquivo não suportado</p>;
    }
    return <p type="success"> Solte a imagem aqui...</p>;
  }, [isDragActive, isDragReject]);

  return (
    <div className={styles.drop_container} {...getRootProps()}>
      <input {...getInputProps()} />
      {renderDragMessage()}
    </div>
  );
}
