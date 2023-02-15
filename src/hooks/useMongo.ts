import * as Realm from 'realm-web';
import {  useState, useEffect } from 'react';

export const useMongo = () => {
  const [db, setDb] = useState<Realm.App>({} as Realm.App);

  useEffect(() => {
    setDb(Realm.getApp(process.env.NEXT_PUBLIC_MONGO_APP_ID as string));
  }, [setDb]);

  useEffect(() => {
    if (db && !!db.currentUser) {
      const user = Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_REALM_API_KEY as string);
      db.logIn(user);
    }
  }, [db]);

  return db;
}