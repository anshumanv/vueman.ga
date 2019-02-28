import axios from "axios";
import { SERVER_URL } from '../config';

const BASE_URL = `${SERVER_URL}/api/users`;

export const register = payload => {
  return axios.post(`${BASE_URL}/signup`, payload);
};

export const loginPromise = payload => {
  return axios.post(`${BASE_URL}/login`, payload);
};
