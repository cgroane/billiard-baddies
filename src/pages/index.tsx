import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { PoolTable } from "@/utils/handleGoogleScriptLoad";
import { Suspense } from "react";
import { getPoolTables } from "./api/tables";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({ tables }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Map poolTables={tables} />
        <BottomBar/>
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