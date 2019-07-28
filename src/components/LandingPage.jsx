import React from "react";
import { Container } from "react-bootstrap";

import { Header } from "./Header";
import { SearchContent } from "./SearchContent";
import { Description } from "./Description";

const LandingPage = () => {
  return (
      <Container>
        <Header />
        <SearchContent />
        <Description />
      </Container>
  );
};

export { LandingPage };
