import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { PoolTable } from "@/types";
import { Suspense, useState } from "react";
import { getPoolTables } from "./api/tables";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({ tables }) => {
  const [selectedTable, setSelectedTable] = useState<PoolTable>({ } as PoolTable);
  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Map setSelectedTable={setSelectedTable} poolTables={tables} />
        <BottomBar tableData={selectedTable} />
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