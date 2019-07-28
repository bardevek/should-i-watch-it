import React from "react";
import { Spinner } from "react-bootstrap";

import { LoaderContainer } from "../StyledComponents/Loader";

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner animation="border" variant="primary" />
    </LoaderContainer>
  );
};

export { Loader };
