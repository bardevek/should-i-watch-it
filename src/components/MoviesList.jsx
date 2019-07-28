import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";

import { Column } from "../StyledComponents";
import { MoviesListContent } from "./MoviesListContent";
import { HomeButton } from "./HomeButton";
import { Loader } from "./Loader";
import { ErrorContext } from "../App";
import { useMovies } from "../hooks";

const MoviesList = () => {
  const setError = useContext(ErrorContext);
  const { movies, isLoading } = useMovies(setError);

  return (
    <Container>
      {isLoading && <Loader />}
      <Row>
        <Column direction="right">
          <HomeButton />
        </Column>
      </Row>
      <Row>
        <Column>
          <h1>List of results</h1>
        </Column>
      </Row>
      <MoviesListContent movies={movies} />
    </Container>
  );
};

export { MoviesList };
