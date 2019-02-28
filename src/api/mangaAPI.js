import axios from "axios";
import { SERVER_URL } from '../config';

const BASE_URL = `${SERVER_URL}/api/manga`;

export const updateStatusPromise = payload => {
  console.log(payload);
  const { mangaId, newStatus, token } = payload;
  return axios.put(
    `${BASE_URL}/${mangaId}/status/${newStatus}`,
    {},
    {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};

export const addMangaPromise = ({ payload, token }) => {
  console.log(payload, token);
  return axios.post(`${BASE_URL}/`, payload, {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json"
    }
  });
};
