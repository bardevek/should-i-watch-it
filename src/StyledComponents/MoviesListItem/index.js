import { Image, ListGroup } from "react-bootstrap";
import styled from "styled-components";

import { Column } from "../Column";

export const StyledListGroupItem = styled(ListGroup.Item)`
  cursor: pointer;
`;

export const PosterColumn = styled(Column)`
  @media (max-width: 767px) {
    margin-bottom: 5%;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 60px;
`;

export const Year = styled.p`
  font-style: italic;
  margin-bottom: 0;
`;
