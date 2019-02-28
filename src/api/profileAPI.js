import axios from "axios";
import { SERVER_URL } from '../config';

const BASE_URL = `${SERVER_URL}/api/users`;

// const tokenHeader = token => {
//   return `Authorization': "Bearer" ${token}}`;
// };

export const profilePromise = username => {
  return axios.get(`${BASE_URL}/${username}`);
};
