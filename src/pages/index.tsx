import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { useMongo } from "@/hooks/useMongo";
import { useAppContext } from "@/state/mongoProvider";
import * as Realm from 'realm-web';
import { usePoolTableContext } from "@/state/PoolTablesProvider";
import { PoolTable } from "@/types";
import { Suspense, useEffect } from "react";
import { getPoolTables } from "./api/tables";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({ tables }) => {
  const { setPoolTables } = usePoolTableContext();
  const mongo = useMongo()
  useEffect(() => {
    if (mongo && !mongo?.currentUser) {
      const user = Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_REALM_API_KEY as string);
      mongo.logIn(user);
    }
    if (mongo && mongo?.currentUser) {
      const db = mongo?.currentUser?.mongoClient("mongodb-atlas");
      db.db("pool-tables").collection("pool-taables").find().then((response) => {
        setPoolTables(response)
      });
    }
  }, [setPoolTables, mongo]);

  return (
    <Page>
      <Map />
      <BottomBar />
    </Page>
  )
}



/**
 * 
 * @returns this is for SSR pool table findings\
 * although it may be  better to just do it all client side for realtime updates
 */
// export const getServerSideProps = async () => {
//   const data = await getPoolTables();
//   return {
//     props: {
//       tables: JSON.parse(JSON.stringify(data))
//     }
//   }
// }
// const getStaticPaths = () => {
  
// }

export default Home;