import clientPromise from '@/lib/mongo';
import { NextApiResponse, NextApiRequest } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;

  const alreadyExists = await client.db('pool-tables').collection('tables').findOne({ 
    place_id: req.body.place_id
   });
  return await client.db('pool-tables').collection('tables').updateOne({
    place_id: req.body.place_id
  }, {
    ...req.body,
  }).then((value) => res.status(200).json({ data: {...value} }));
}
export default handler;