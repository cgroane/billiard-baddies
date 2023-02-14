import * as Realm from 'realm-web';
import {  useState, useEffect } from 'react';

export const useMongo = () => {
  const [db, setDb] = useState<Realm.App>({} as Realm.App);

  useEffect(() => {
    setDb(Realm.getApp(process.env.NEXT_PUBLIC_MONGO_APP_ID as string));
  }, []);

  return db;
}