import React from 'react';
import * as Realm from 'realm-web';

interface StaticProps {
  plant: string;
}
const Static: React.FC<StaticProps> = ({ plant }) => {
  return (
    <></>
  )
}

export async function getStaticProps() {
  const apiKey = process.env.NEXT_PUBLIC_REALM_API_KEY;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_MONGO_APP_ID as string });
  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey as string);
  const user = await app.logIn(credentials);
  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");
  const tables = mongo.db("mongodb-atlas").collection("pool-tables");
  // Use tables.findOne to query the database
  const data = await tables.findOne({ city: "seattle".toLocaleLowerCase() });
  // You must parse data as JSON to use it as a prop
  const json = JSON.parse(JSON.stringify(data));
  return {
    props: {
      plant: json,
    },
  };
}