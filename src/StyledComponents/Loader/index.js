import styled from "styled-components";

export const LoaderContainer = styled.div`
  z-index: 1000;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  position: absolute;
  cursor: wait;
  display: flex;
  align-items: center;
  justify-content: center;
`;