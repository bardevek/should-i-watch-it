import React from "react";
import { Modal } from "react-bootstrap";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { Loader } from "./Loader";

const MovieDetails = ({
  movie,
  isModalVisible,
  setModalVisibility,
  isLoading
}) => {
  return (
    <Modal
      show={isModalVisible}
      onHide={() => setModalVisibility(false)}
      size="lg"
    >
      {isLoading && <Loader />}
      <ModalHeader movie={movie} />
      <ModalBody movie={movie} />
      <Modal.Footer />
    </Modal>
  );
};

export { MovieDetails };
