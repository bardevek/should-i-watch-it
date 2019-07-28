import { getJSON } from "../ajax";

export const getMoviesList$ = title => getJSON(`s=${title}`);
