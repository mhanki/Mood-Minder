import { useState, createContext, useEffect, ReactNode } from "react";
import { getFeelings, getEnvs } from "./logs.service";

export type Feeling = {
  ID: number,
  name: string,
  rank: number
};

export type Env = {
  ID: number,
  name: string
};

interface LogsContextType {
  feelings: Feeling[] | undefined,
  envs: Env[] | undefined,
  error: any
};

export const LogsContext = createContext<LogsContextType>({ 
  feelings: undefined, 
  envs: undefined,
  error: null 
});

export const LogsContextProvider = ({ children }: { children: ReactNode }) => {
  const [feelings, setFeelings] = useState<Feeling[]>([]);
  const [envs, setEnvs] = useState<Env[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeelings()
      .then((results) => {
        setFeelings(results);
      })
      .catch((err) => {
        setError(err);
      });

    getEnvs()
      .then((results) => {
        setEnvs(results);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <LogsContext.Provider
      value={{
        feelings,
        envs,
        error,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
}