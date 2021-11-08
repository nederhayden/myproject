import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #70ff38;
`;

const dragReject = css`
  border-color: red;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  border-color: #4dcfe1;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;

const messageColors = {
  default: "#4dcfe1",
  error: "red",
  success: "#70ff38",
};

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  color: ${(props) => messageColors[props.type || "default"]};
`;
