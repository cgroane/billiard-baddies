import {  useState, useEffect } from 'react';
import clientPromise from '@/lib/mongo';
import { MongoClient } from 'mongodb';

export const useMongo = () => {
  const [db, setDb] = useState<MongoClient | null>(null);

  useEffect(() => {
    const getDb = async () => {
      if (!db) {
        const client = await clientPromise;
        setDb(client)
      }
    }
  }, [db, setDb]);

  return db;
}