import React, { Fragment, useState, useContext } from "react";

import { Column } from "../StyledComponents";
import { useMovieDetails } from "../hooks";
import { MovieDetails } from "./MovieDetails";
import { NoResults } from "./NoResults";
import { ErrorContext } from "../App";
import {
  ListContainer,
  ListItemContainer
} from "../StyledComponents/MoviesListContent";
import { MoviesListItem } from "./MoviesListItem";

const MoviesListContent = ({ movies }) => {
  const setError = useContext(ErrorContext);

  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const { movieDetails, isLoading } = useMovieDetails(selectedId, setError);

  const noSearchResult = !movies || movies.length === 0;

  if (noSearchResult) {
    return <NoResults />;
  }

  return (
    <Fragment>
      <MovieDetails
        isModalVisible={isModalVisible}
        movie={movieDetails}
        setModalVisibility={setModalVisibility}
        isLoading={isLoading}
      />
      <ListContainer>
        <Column>
          <ListItemContainer>
            {movies.map(movie => (
              <MoviesListItem
                key={movie.imdbID}
                movie={movie}
                setModalVisibility={setModalVisibility}
                setSelectedId={setSelectedId}
              />
            ))}
          </ListItemContainer>
        </Column>
      </ListContainer>
    </Fragment>
  );
};

export { MoviesListContent };
