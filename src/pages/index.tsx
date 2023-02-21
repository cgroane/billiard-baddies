import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { useMongo } from "@/hooks/useMongo";
import { useAppContext } from "@/state/mongoProvider";
import { usePoolTableContext } from "@/state/PoolTablesProvider";
import { PoolTable } from "@/types";
import { Suspense, useEffect } from "react";
import { getPoolTables } from "./api/tables";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({ tables }) => {
  const poolContext = usePoolTableContext();
  console.log('trying new deployment', tables);
  useEffect(() => {
    poolContext.setPoolTables(tables)
  }, [poolContext.setPoolTables, tables]);
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
export const getStaticProps = async () => {
  const data = await getPoolTables();
  return {
    props: {
      tables: JSON.parse(JSON.stringify(data))
    }
  }
}
// const getStaticPaths = () => {
  
// }

export default Home;