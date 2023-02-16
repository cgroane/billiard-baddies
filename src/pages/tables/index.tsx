import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { PoolTable } from "@/utils/handleGoogleScriptLoad";
import styled from "styled-components";
import { getPoolTables } from "../api/tables";

interface TablesProps {
  tables: PoolTable[]
}
const Tables: React.FC<TablesProps> = ({ tables }) => {
  return (
    <Page>
      <Map poolTables={tables} />
      <BottomBar/>
    </Page>
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

export default Tables;