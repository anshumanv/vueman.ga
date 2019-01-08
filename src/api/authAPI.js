import axios from 'axios';

const URL = process.env.SERVER_URL;

export const register = payload => {
  return axios.post(`http://localhost:5000/api/users/signup`, payload);
}
