import React, { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import { PoolTable } from '@/types';


interface PoolTablesContextProps {
  poolTables:PoolTable[];
  setPoolTables: Dispatch<SetStateAction<PoolTable[]>>;
  selectedTable: PoolTable;
  setSelectedTable: Dispatch<SetStateAction<PoolTable>>;
  refreshTableData: () => void;
}


const PoolTablesContext = createContext<PoolTablesContextProps>({} as PoolTablesContextProps);

export const PoolTableContextWrapper: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const [poolTables, setPoolTables] = useState<PoolTable[]>([] as PoolTable[]);
  const [selectedTable, setSelectedTable] = useState<PoolTable>({} as PoolTable);
  const refreshTableData = useCallback(() => {
    setSelectedTable(poolTables.find((table) => table.place_id === selectedTable.place_id) || {} as PoolTable);
  }, [setSelectedTable, poolTables, selectedTable.place_id]);

  return (
    <PoolTablesContext.Provider value={{ poolTables, setPoolTables, selectedTable, setSelectedTable, refreshTableData }} {...props}>
      {children}
    </PoolTablesContext.Provider>
  );
}

export const usePoolTableContext = () => {
  const poolContext = useContext(PoolTablesContext);
  return poolContext;
}

