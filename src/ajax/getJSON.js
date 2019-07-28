import { ajax } from "rxjs/ajax";

import { apikey, baseUrl } from "../consts";
import { defaultHeaders } from "./defaultHeaders";

export const getJSON = (query, headers = defaultHeaders) => {
  return ajax.getJSON(`${baseUrl}/?${query}&apikey=${apikey}`, headers);
};
