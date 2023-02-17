import { useMongo } from "@/hooks/useMongo";
import React, { createContext, useContext } from "react";
import * as Realm from 'realm-web';
interface MongoContextProps {
  db: Realm.App;
}

const MongoContext = createContext<MongoContextProps>({} as MongoContextProps);

export const AppWrapper: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const db = useMongo();
  return (
    <MongoContext.Provider value={{ db }} {...props}>
      {children}
    </MongoContext.Provider>
  );
}

export const useAppContext = () => {
  const app = useContext(MongoContext);
  const { db } = app
  return db;
}

