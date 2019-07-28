import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: ${props => {
    if (props.direction === "left") {
      return "flex-start";
    }
    if (props.direction === "right") {
      return "flex-end";
    }
    return "center";
  }};
  justify-content: ${props => {
    if (props.position === "top") {
      return "flex-start";
    }
    if (props.position === "bottom") {
      return "flex-end";
    }
    return "center";
  }};
`;
