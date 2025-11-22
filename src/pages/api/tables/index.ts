import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "@/lib/mongo";

export const getPoolTables = async () => {
  const client = await clientPromise;
  const data = await client.db("pool-tables").collection('tables').find().toArray();

  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const data = await getPoolTables();
      return res.status(200).json({ data });
    }
    
    if (req.method === 'POST') {
      return res.status(501).json({ message: 'Not Implemented' });
    }
    
    if (req.method === 'PUT') {
      return res.status(501).json({ message: 'Not Implemented' });
    }
    
    if (req.method === 'DELETE') {
      return res.status(501).json({ message: 'Not Implemented' });
    }
    
    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
