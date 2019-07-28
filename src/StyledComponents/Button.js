import styled from "styled-components";
import {Button as BootstrapButton} from "react-bootstrap";

export const Button = styled(BootstrapButton)`
  min-width: 132px;
  max-width: 180px;
  width: 40%;
  margin-top: ${props => `${props.margintop}px`};
  cursor: pointer;
`;
