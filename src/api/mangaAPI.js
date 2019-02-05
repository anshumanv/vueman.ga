import axios from "axios";

const BASE_URL = "http://localhost:5000/api/manga";

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
