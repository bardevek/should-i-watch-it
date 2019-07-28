import notFound from "../assets/notFound.png";

export const setPosterImg = movie => {
  return movie.Poster === "N/A" ? notFound : movie.Poster;
};
