import { ReactNode, createContext, useEffect, useState } from 'react';
import { loginRequest, registrationRequest, getUser } from "./auth.service";
import * as SecureStore from 'expo-secure-store';

type User = {
  ID?: string,
  name: string,
  username: string,
  email: string,
  password: string
};

interface AuthContextType {
  token: null | string,
  username: null | string,
  isLoading: boolean,
  error: any,
  onLogin: (email: string, password: string) => void,
  onRegister: (user: User) => void,
  onLogout: () => void,
};

export const AuthenticationContext = createContext<AuthContextType>({
  token: null,
  username: null,
  isLoading: true,
  error: null,
  onLogin: () => null,
  onRegister: () => null,
  onLogout: () => null
});

export const AuthenticationContextProvider = ({ children }: any) => {
  const [token, setToken] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    SecureStore.getItemAsync('jwt')
      .then((token: string | null) => {
        if (token) {
          getUser()
            .then(({ user }: { user: User }) => {
              setUsername(user.name);
            })
            .then(() => {
              setToken(token);
              setIsLoading(false);
            });
        }
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      getUser()
        .then(({ user }: { user: User }) => {
          setUsername(user.name);
        })
        .then(() => setIsLoading(false))
        .catch(err => console.log(err));
    }
  }, [token]);

  const onLogin = (email: string, password: string) => {
    loginRequest(email, password)
      .then((data) => {
        SecureStore.setItemAsync('jwt', data.token);
        setToken(data.token);
      });
  };

  const onRegister = (user: User) => {
    registrationRequest(user)
      .then((data) => {
        SecureStore.setItemAsync('jwt', data.token);
        setToken(data.token);
      });
  };

  const onLogout = () => {
    SecureStore.deleteItemAsync('jwt');
    setToken(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        username,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};