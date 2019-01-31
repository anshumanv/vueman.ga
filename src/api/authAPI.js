import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users";

export const register = payload => {
  return axios.post(`${BASE_URL}/signup`, payload);
};

export const loginPromise = payload => {
  return axios.post(`${BASE_URL}/login`, payload);
};
