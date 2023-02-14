import app from "..";
import * as Realm from 'realm-web';

export const getPoolTables = async () => {
  console.log(process.env.NEXT_PUBLIC_REALM_API_KEY);
  const credentials = Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_REALM_API_KEY as string);
  const user = await app.logIn(credentials);

  const data = await user.mongoClient("mongodb-atlas").db("pool-tables").collection("pool-taables").find();

  return data
}

