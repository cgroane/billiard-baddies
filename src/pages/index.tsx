import BottomBar from "@/components/BottomBar";
import Map from "@/components/maps";
import Page from "@/components/page";
import { useMongo } from "@/hooks/useMongo";
import { PoolTable } from "@/types";
import { Suspense, useEffect, useState } from "react";
// import { getPoolTables } from "./api/tables";
import Loading from "./loading";

interface HomeProps {
  tables: PoolTable[]
}
const Home: React.FC<HomeProps> = ({  }) => {
  const [selectedTable, setSelectedTable] = useState<PoolTable>({ } as PoolTable);
  const [tables, setTables] = useState<PoolTable[]>([])
  const app = useMongo();

  const getTables = () => {
    if (app && app.currentUser) {
      app.currentUser.mongoClient("mongodb-atlas").db('pool-tables').collection('pool-taables').find()
        .then((response) => {
          setTables(response);
        })
    }
  }
  useEffect(() => {
    getTables();
  },[])
  
  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Map setSelectedTable={setSelectedTable} poolTables={tables} />
        <BottomBar tableData={selectedTable} />
      </Page>
    </Suspense>
  )
}


export default Home;