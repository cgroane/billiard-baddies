import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { LoadingStates, useLoadingState } from "@/hooks/useLoadingState";
import { useAppContext } from "@/state/mongoProvider";
import { usePoolTableContext } from "@/state/PoolTablesProvider";
import { PoolTable } from "@/types";
import { Suspense, useEffect } from "react";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({ tables }) => {
  const { loading, setLoading } = useLoadingState();
  const { setPoolTables } = usePoolTableContext();
  const mongo = useAppContext()
  useEffect(() => {
    if (mongo && mongo?.currentUser) {
      setLoading(LoadingStates.LOADING);
      const db = mongo?.currentUser?.mongoClient("mongodb-atlas");
      db.db("pool-tables").collection("pool-taables").find().then((response) => {
        setLoading(LoadingStates.IDLE);
        setPoolTables(response)
      });
    }
  }, [setPoolTables, mongo]);

  return (
    <Suspense fallback={<>Loading</>} >
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