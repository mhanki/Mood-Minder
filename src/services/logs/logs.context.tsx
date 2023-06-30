import { useState, createContext, useEffect, ReactNode } from "react";
import { getFeelings, getEnvs, getAll, createOne  } from "./logs.service";

export type Feeling = {
  ID: number,
  name: string,
  rank: number
};

export type Env = {
  ID: number,
  name: string
};

export type Log = {
  ID: number,
  userId: number,
  feeling: string,
  environment: string,
  createdAt: string,
  feelingRank: number
};

interface LogsContextType {
  feelings: Feeling[] | undefined,
  envs: Env[] | undefined,
  logs: Log[] | undefined,
  addLog: (log: any | undefined) => void,
  error: any
};

export const LogsContext = createContext<LogsContextType>({ 
  feelings: undefined, 
  envs: undefined,
  logs: undefined,
  addLog: () => null,
  error: null 
});

export const LogsContextProvider = ({ children }: { children: ReactNode }) => {
  const [feelings, setFeelings] = useState<Feeling[]>([]);
  const [envs, setEnvs] = useState<Env[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState(null);

  const retrieveLogs = () => {
    getAll()
      .then((results) => {
        setLogs(results);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const addLog = (log: { feeling: number, environment: number}) => {
    createOne(log)
      .then(() => {
        getAll()
          .then((results) => {
            setLogs(results);
          })
      })
      .catch((err) => { console.log(err) });
  };

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

    retrieveLogs();
  }, []);

  return (
    <LogsContext.Provider
      value={{
        feelings,
        envs,
        logs,
        addLog,
        error
      }}
    >
      {children}
    </LogsContext.Provider>
  );
}