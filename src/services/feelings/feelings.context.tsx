import { useState, createContext, useEffect, ReactNode } from "react";
import { getFeelings } from "./feelings.service";

export type Feeling = {
  ID: number,
  name: string,
  rank: number
};

interface FeelingsContextType {
  feelings: Feeling[] | undefined,
  error: any
}

export const FeelingsContext = createContext<FeelingsContextType>(
  { feelings: undefined, error: null }
);

export const FeelingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [feelings, setFeelings] = useState<Feeling[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeelings()
      .then((results) => {
        setFeelings(results);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <FeelingsContext.Provider
      value={{
        feelings,
        error,
      }}
    >
      {children}
    </FeelingsContext.Provider>
  );
}