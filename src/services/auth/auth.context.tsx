import { ReactNode, createContext, useEffect, useState } from 'react';
import { loginRequest, registrationRequest } from "./auth.service";
import * as SecureStore from 'expo-secure-store';

type User = {
  name: string,
  username: string,
  email: string,
  password: string
};

interface AuthContextType {
  user: null | string,
  isLoading: boolean,
  error: any,
  onLogin: (email: string, password: string) => void,
  onRegister: (user: User) => void,
  onLogout: () => void,
};

export const AuthenticationContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  error: null,
  onLogin: () => null,
  onRegister: () => null,
  onLogout: () => null
});

export const AuthenticationContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    SecureStore.getItemAsync('jwt')
      .then((data: string| null) => {
        setUser(data);
        setIsLoading(false);
      });
  }, [])

  const onLogin = (email: string, password: string) => {
    loginRequest(email, password)
      .then((data) => {
        SecureStore.setItemAsync('jwt', data.token);
        setUser(data.token);
      });
  };

  const onRegister = (user: User) => {
    registrationRequest(user)
      .then((data) => {
        SecureStore.setItemAsync('jwt', data.token);
        setUser(data.token);
      });
  };

  const onLogout = () => {
    SecureStore.deleteItemAsync('jwt');
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
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