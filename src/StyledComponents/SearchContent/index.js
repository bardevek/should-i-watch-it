import {Row} from "react-bootstrap";
import styled from "styled-components";

import {Column} from "../Column";

export const Container = styled(Row)`
  margin-bottom: 5%;
  justify-content: center;
`;

export const ButtonColumn = styled(Column)`
  @media(max-width: 575px){
    margin-top: 3%;
  }
`;