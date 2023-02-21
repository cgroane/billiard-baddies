import * as Realm from 'realm-web';
import app from '..';
import { NextApiResponse, NextApiRequest } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const credentials = Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_REALM_API_KEY as string);
  const user = await app.logIn(credentials);
  const alreadyExists = await user?.mongoClient("mongodb-atlas").db('pool-tables').collection('pool-taables').findOne({ 
    place_id: req.body.place_id
   });
  if (alreadyExists && req.method === 'POST') {
    return res.status(400).json({ errorMessage: 'This table is already in the database', data: alreadyExists });
  }
  if (req.method === 'PUT') {
    return await user?.mongoClient("mongodb-atlas").db('pool-tables').collection('pool-taables').findOneAndUpdate({
      place_id: req.body.place_id
    }, {
      ...req.body
    }).then((value) => res.status(200).json({ data: {...value} }));
  }
  return await user?.mongoClient("mongodb-atlas").db('pool-tables').collection('pool-taables').insertOne({
    ...req.body,
  }).then((value) => res.status(200).json({ data: {...value} }));

}
export default handler;