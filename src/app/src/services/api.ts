import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const url = 'http://localhost:3000';

export function USER_AUTH(body: object) {
  return {
    url: url + '/auth',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export default api;
