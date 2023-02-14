import Page from '@/components/page'
import React from 'react'
import NewTableForm from 'src/components/NewTableForm/index';
 
interface AddTableProps {}
const AddTable: React.FC<AddTableProps> = ({}: AddTableProps) => {
  return (
    <Page>
      <NewTableForm/>
    </Page>
  )
}
 
export default AddTable
 