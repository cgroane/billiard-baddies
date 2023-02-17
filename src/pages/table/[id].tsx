import React from 'react'
import { PoolTable } from '@/types';
import Page from '@/components/page';
 
interface TableProps {
 table: PoolTable[];
}
const Table: React.FC<TableProps> = ({ table }: TableProps) => {
  return (
    <Page>

    </Page>
  )
}
 
export default Table
 
Table.displayName = "Table"