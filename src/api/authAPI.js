import axios from 'axios';

const URL = 'http://localhost:5000/api/users';

export const register = payload => {
  return axios.post(`${URL}/signup`, payload);
}

export const loginPromise = payload => {
  return axios.post(`${BASE_URL}/login`, payload);
}
