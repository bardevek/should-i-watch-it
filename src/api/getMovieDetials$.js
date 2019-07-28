import { getJSON } from "../ajax";

export const getMovieDetails$ = id => getJSON(`i=${id}`);
