import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.3:3000',
});

const url = 'http://192.168.0.12:3000';

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

export function USER_CREATE(body: object) {
  return {
    url: url + '/users',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function CATEGORIES_GET(token: string) {
  return {
    url: url + '/categories',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

interface ExercisesGetProps {
  token: string;
  userId: string;
}

export function EXERCISES_GET({ token, userId }: ExercisesGetProps) {
  return {
    url: url + `/exercises/${userId}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

interface TrainingCreateProps {
  token: string;
  body: object;
}

export function TRAINING_CREATE({ body, token }: TrainingCreateProps) {
  return {
    url: url + '/training',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export default api;
