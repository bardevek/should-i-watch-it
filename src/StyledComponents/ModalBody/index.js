import { Image } from "react-bootstrap";
import styled from "styled-components";

import { Column } from "../Column";

export const PosterColumn = styled(Column)`
  @media (max-width: 575px) {
    margin-bottom: 5%;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  max-height: 500px;
  width: 150px;
  margin-left: 15px;
`;
