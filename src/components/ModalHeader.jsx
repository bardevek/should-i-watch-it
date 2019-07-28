import React from "react";
import { Modal } from "react-bootstrap";

import { Year } from "../StyledComponents/ModalHeader";

const ModalHeader = ({ movie }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>
        {movie.Title}{" "}
        <Year>
          ({movie.Year}) | {movie.Runtime}
        </Year>
      </Modal.Title>
    </Modal.Header>
  );
};

export { ModalHeader };
