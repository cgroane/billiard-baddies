import { PoolTable } from '@/types'
import React from 'react'
import styled from 'styled-components'
 
interface MarkerWindowProps {
  table: PoolTable
}
const MarkerWindow: React.FC<MarkerWindowProps> = ({ table }: MarkerWindowProps) => {
  return (
    <MarkerWindowContainer>
      {table.name}
    </MarkerWindowContainer>
  )
}
 
const MarkerWindowContainer = styled.div`
  color: black;
  width: auto;
  height: 2rem;
`
export default MarkerWindow
 
MarkerWindow.displayName = "MarkerWindow"