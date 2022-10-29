import http from './http';

export function login({ username, password }) {
  return http.post('/users/login', { username, password }).then((response) => {
    const { data: json } = response;
    const user = json.data;

    return {
      data: user,
    };
  });
}
