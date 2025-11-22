import app from '..';
import { NextApiResponse, NextApiRequest } from 'next';
import clientPromise from '@/lib/mongo';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    
    const alreadyExists = await client.db('pool-tables').collection('tables').findOne({ 
      place_id: req.body.place_id
     });
    
    if (alreadyExists && req.method === 'POST') {
      return res.status(400).json({ errorMessage: 'This table is already in the database', data: alreadyExists });
    }
    if (req.method === 'PUT') {
      delete req.body._id;
      return await client.db('pool-tables').collection('tables').findOneAndReplace({
        place_id: req.body.place_id
      }, {
        ...req.body
      }).then((value) => res.status(200).json({ data: {...value} }));
    }
    else if (req.method === 'POST') {
      return await client.db('pool-tables').collection('tables').insertOne({
        ...req.body,
      }).then((value) => res.status(200).json({ data: {...value} }));
    }
  } catch (err) {

  }
  
}
export default handler;