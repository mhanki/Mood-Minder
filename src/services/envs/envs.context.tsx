import { useState, createContext, useEffect, ReactNode } from "react";
import { getEnvs } from "./envs.service";

export type Env = {
  ID: number,
  name: string
};

interface EnvsContextType {
  envs: Env[] | undefined,
  error: any
}

export const EnvsContext = createContext<EnvsContextType>({ envs: undefined, error: null });

export const EnvsContextProvider = ({ children }: { children: ReactNode }) => {
  const [envs, setEnvs] = useState<Env[]>();
  const [error, setError] = useState(null);

  useEffect(() => {
    getEnvs()
      .then((results) => {
        setEnvs(results);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <EnvsContext.Provider
      value={{
        envs,
        error
      }}
    >
      {children}
    </EnvsContext.Provider>
  );
}