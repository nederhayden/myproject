import { useCallback } from "react";
import { useFiles } from "../../contexts/GlobalContext";
import { DropContainer, UploadMessage } from "./styles";
import { useDropzone } from "react-dropzone";

export default function Upload() {
  const { handleUpload } = useFiles();

  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste imagens aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <DropContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {renderDragMessage()}
    </DropContainer>
  );
}
