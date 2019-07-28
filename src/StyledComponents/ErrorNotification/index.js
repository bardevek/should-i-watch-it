import styled from "styled-components";
import {Toast} from "react-bootstrap";

export const ToastBody = styled(Toast.Body)`
  text-align: center;
`;

export const StyledToast = styled(Toast)`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 300px;
  background-color: rgb(240, 52, 52) !important;
  color: white;
  border-radius: 20px !important;
`;