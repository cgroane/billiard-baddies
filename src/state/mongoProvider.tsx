import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface MongoContextProps {
  poolTables:string[];
  setPoolTables: Dispatch<SetStateAction<string[]>>;
}

const MongoContext = createContext<MongoContextProps | null>(null);

export const AppWrapper: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const [poolTables, setPoolTables] = useState(['']);

  return (
    <MongoContext.Provider value={{ poolTables, setPoolTables }} {...props}>
      {children}
    </MongoContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(MongoContext);
}

