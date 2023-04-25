import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.3:3000',
});

const url = 'http://192.168.0.3:3000';

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
