import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/users';

// const tokenHeader = token => {
//   return `Authorization': "Bearer" ${token}}`;
// };

export const profilePromise = username => {
  return axios.get(`${BASE_URL}/${username}`);
};
