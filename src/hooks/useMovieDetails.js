import { useState, useEffect } from "react";

import { getMovieDetails$ } from "../api/getMovieDetials$";

const useMovieDetails = (id,onError) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setLoaderStatus] = useState(false);

  useEffect(() => {
    if (id !== "") {
      setLoaderStatus(true);
      getMovieDetails$(id).subscribe({
        next(data) {
          setMovieDetails(data);
          setLoaderStatus(false);
        },
        catch() {
          setLoaderStatus(false);
          onError();
        }
      });
    }
  }, [id,onError]);

  return { movieDetails,isLoading };
};

export { useMovieDetails };
