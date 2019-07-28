import React from "react";
import { Row } from "react-bootstrap";

import { Column } from "../StyledComponents";
import { setPosterImg } from "../handlers";
import {
  PosterColumn,
  StyledImage,
  StyledListGroupItem,
  Year
} from "../StyledComponents/MoviesListItem";

const MoviesListItem = ({ movie, setSelectedId, setModalVisibility }) => {
  const selectMovie = id => {
    setModalVisibility(true);
    setSelectedId(id);
  };

  return (
    <StyledListGroupItem onClick={() => selectMovie(movie.imdbID)}>
      <Row>
        <PosterColumn sm={12} md={2} lg={1}>
          <StyledImage src={setPosterImg(movie)} rounded />
        </PosterColumn>
        <Column>
          <h5> {movie.Title}</h5>
          <Year>{movie.Year}</Year>
        </Column>
      </Row>
    </StyledListGroupItem>
  );
};

export { MoviesListItem };
