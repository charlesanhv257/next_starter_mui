import axios from 'axios';

const baseURL = 'https://your-rest-api.com/api'; // Replace with your endpoint

export const restClient = axios.create({
  baseURL,
  // headers: { Authorization: `Bearer ${token}` },
});
