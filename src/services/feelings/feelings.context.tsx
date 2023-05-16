import { useState, createContext, useEffect, ReactNode } from "react";
import { feelingsRequest } from "./feelings.service";

export type Feeling = {
  ID: number,
  name: string,
  rank: number
};

interface FeelingsContextType {
  feelings: Feeling[] | undefined,
  error: any,
  isLoading: boolean
}

export const FeelingsContext = createContext<FeelingsContextType>({feelings: undefined, error: null, isLoading: true});

export const FeelingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [feelings, setFeelings] = useState<Feeling[]>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveFeelings = () => {
    setIsLoading(true);
    setFeelings([]);

    setTimeout(() => {
      feelingsRequest()
        .then((results) => {
          setIsLoading(false);
          setFeelings(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    retrieveFeelings();
  }, []);

  return (
    <FeelingsContext.Provider
      value={{
        feelings,
        isLoading,
        error,
      }}
    >
      {children}
    </FeelingsContext.Provider>
  );
}