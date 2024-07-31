import axios from 'axios';

const baseUrl = 'http://127.0.0.1:4000/api';

const get = async ({ endpoint, query }) => {
  const queryString = Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join('&');

  return await axios.get(`${baseUrl}/${endpoint}?${queryString}`);
};

const post = async ({ endpoint, payload }) => {
  console.log({ payload });
  return await axios.post(`${baseUrl}/${endpoint}`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });
};

const api = { get, post };
export default api;
