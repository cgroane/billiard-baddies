import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { PoolTable } from '@/utils/handleGoogleScriptLoad';

interface PoolTablesContextProps {
  poolTables:PoolTable[];
  setPoolTables: Dispatch<SetStateAction<PoolTable[]>>;
  selectedTable: PoolTable;
  setSelectedTable: Dispatch<SetStateAction<PoolTable>>;
}

const PoolTablesContext = createContext<PoolTablesContextProps>({
  poolTables: [] as PoolTable[],
  setPoolTables: ((tables: PoolTable[]) => null) as Dispatch<SetStateAction<PoolTable[]>>,
  selectedTable: {} as PoolTable,
  setSelectedTable: ((table: PoolTable) => null) as Dispatch<SetStateAction<PoolTable>>
});

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
  const { selectedTable, } = poolContext;
  return { setSelectedTable: poolContext?.selectedTable }
}

