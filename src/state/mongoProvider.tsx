import { useMongo } from "@/hooks/useMongo";
import { MongoClient } from "mongodb";
import React, { createContext, useContext } from "react";
import * as Realm from 'realm-web';
interface MongoContextProps {
}

const MongoContext = createContext<MongoContextProps>({} as MongoContextProps);

export const AppWrapper: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  return (
    <MongoContext.Provider value={{ }} {...props}>
      {children}
    </MongoContext.Provider>
  );
}

export const useAppContext = () => {
  const app = useContext(MongoContext);
}

