import React from "react";
import { Modal, Row } from "react-bootstrap";

import { Column } from "../StyledComponents";
import { PosterColumn, StyledImage } from "../StyledComponents/ModalBody";
import { setPosterImg } from "../handlers";
import { InformationItem } from "./InformationItem";

const ModalBody = ({ movie }) => {
  return (
    <Modal.Body>
      <Row>
        <PosterColumn xs={12} sm={5} lg={3}>
          <StyledImage src={setPosterImg(movie)} rounded />
        </PosterColumn>
        <Column xs={12} sm={7} lg={9} direction="left" position="top">
          <p>{movie.Plot}</p>
          <InformationItem category="Director" content={movie.Director} />
          <InformationItem category="Writer" content={movie.Writer} />
          <InformationItem category="Genre" content={movie.Genre} />
          <InformationItem category="Country" content={movie.Country} />
          <InformationItem category="Released" content={movie.Released} />
        </Column>
      </Row>
    </Modal.Body>
  );
};

export { ModalBody };
