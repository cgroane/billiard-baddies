import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { useAppContext } from "@/state/mongoProvider";
import { usePoolTableContext } from "@/state/PoolTablesProvider";
import { PoolTable } from "@/types";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({  }) => {
  const db = useAppContext();
  const poolContext = usePoolTableContext();
  useEffect(() => {
    if (db?.id && !!db.currentUser) {
      db.currentUser.mongoClient("mongodb-atlas")
        .db('pool-tables')
        .collection('pool-taables')
        .find()
        .then((data) => poolContext.setPoolTables(data));
    }
  }, [poolContext.setPoolTables, db]);
  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Map />
        <BottomBar />
      </Page>
    </Suspense>
  )
}



/**
 * 
 * @returns this is for SSR pool table findings\
 * although it may be  better to just do it all client side for realtime updates
 */
// export const getStaticProps = async () => {
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