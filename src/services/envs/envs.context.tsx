import { useState, createContext, useEffect, ReactNode } from "react";
import { envsRequest } from "./envs.service";

export type Env = {
  ID: number,
  name: string
};

interface EnvsContextType {
  envs: Env[] | undefined,
  error: any,
  isLoading: boolean
}

export const EnvsContext = createContext<EnvsContextType>({envs: undefined, error: null, isLoading: true});

export const EnvsContextProvider = ({ children }: { children: ReactNode }) => {
  const [envs, setEnvs] = useState<Env[]>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveEnvs = () => {
    setIsLoading(true);
    setEnvs([]);

    setTimeout(() => {
      envsRequest()
        .then((results) => {
          setIsLoading(false);
          setEnvs(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    retrieveEnvs();
  }, []);

  return (
    <EnvsContext.Provider
      value={{
        envs,
        isLoading,
        error,
      }}
    >
      {children}
    </EnvsContext.Provider>
  );
}