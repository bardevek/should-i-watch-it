import { useState, useEffect, useMemo } from "react";

import { getMoviesList$ } from "../api/getMoviesList$";
import * as queryString from "query-string";

const useMovies = onError => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setLoaderStatus] = useState(false);

  const queryParams = queryString.parse(window.location.search);

  const title = useMemo(() => queryParams && queryParams.title, [queryParams]);

  useEffect(() => {
    if (title !== "") {
      setLoaderStatus(true);
      getMoviesList$(title).subscribe({
        next(data) {
          setMovies(data.Search);
          setLoaderStatus(false);

        },
        catch() {
          setLoaderStatus(false);
          onError();
        }
      });
    }
  }, [title, onError]);

  return { movies, isLoading };
};

export { useMovies };
