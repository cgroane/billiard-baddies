import * as Realm from 'realm-web';

const app = new Realm.App({ id: process.env.NEXT_PUBLIC_MONGO_APP_ID as string });

export default app;