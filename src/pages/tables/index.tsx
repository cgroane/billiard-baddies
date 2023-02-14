import Page from "@/components/page";
import { getPoolTables } from "../api/tables";

interface TablesProps {
  tables: []
}
const Tables: React.FC<TablesProps> = ({ tables }) => {

  return (
    <Page>
      tables page
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