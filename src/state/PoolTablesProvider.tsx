import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { PoolTable } from '@/types';

interface PoolTablesContextProps {
  poolTables:PoolTable[];
  setPoolTables: Dispatch<SetStateAction<PoolTable[]>>;
  selectedTable: PoolTable;
  setSelectedTable: Dispatch<SetStateAction<PoolTable>>;
}


const PoolTablesContext = createContext<PoolTablesContextProps>({} as PoolTablesContextProps);

export const PoolTableContextWrapper: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const [poolTables, setPoolTables] = useState<PoolTable[]>([] as PoolTable[]);
  const [selectedTable, setSelectedTable] = useState<PoolTable>({} as PoolTable);

  return (
    <PoolTablesContext.Provider value={{ poolTables, setPoolTables, selectedTable, setSelectedTable }} {...props}>
      {children}
    </PoolTablesContext.Provider>
  );
}

export const usePoolTableContext = () => {
  const poolContext = useContext(PoolTablesContext);
  return poolContext;
}

