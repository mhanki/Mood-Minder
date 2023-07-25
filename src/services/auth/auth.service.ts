import { API_URL } from '../../../env';
import * as SecureStore from 'expo-secure-store';

type User = {
  name: string,
  username: string,
  email: string,
  password: string
};

async function addBearer(options: any) {
  const updatedOptions = { ...options };

  const token = await SecureStore.getItemAsync('jwt');

  updatedOptions.headers = {
    ...updatedOptions.headers,
    Authorization: `Bearer ${token}`,
  };

  return updatedOptions;
};

export async function fetchWithBearer(url: string, options = {}) {
  const bearer = await addBearer(options);
  return fetch(url, bearer);
};

export function loginRequest(email: string, password: string) {
  return (
    fetch(`${API_URL}/auth`, {
      method: "POST",
      body: JSON.stringify({
        email, password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  );
};

export function registrationRequest({ name, username, email, password }: User) {
  return (
    fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        name, username, email, password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => loginRequest(email, password))
  );
};

export function getUser() {
  return fetchWithBearer(`${API_URL}/users`)
    .then((res) => res.json());
}