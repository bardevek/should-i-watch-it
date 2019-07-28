import React from "react";

import { SearchContent } from "./SearchContent";
import {
  Container,
  Title,
  TitleContainer
} from "../StyledComponents/NoResults";

const NoResults = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>No search results</Title>
      </TitleContainer>
      <SearchContent buttonMessage="Try again" />
    </Container>
  );
};

export { NoResults };
