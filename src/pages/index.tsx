import { useMongo } from '@/hooks/useMongo';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Link href={'/tables'} > Pool Tables </Link>
      <Link href={'/AddTable'} > Add a new pool table for us to vibe at </Link>
    </>
  )
}
