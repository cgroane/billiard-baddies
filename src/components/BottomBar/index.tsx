import { PoolTable } from '@/utils/handleGoogleScriptLoad'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import PlusSymbol from '../Icons/PlusSymbol'
 
interface BottomBarProps {
  tableData?: PoolTable
}
const BottomBar: React.FC<BottomBarProps> = ({ tableData }: BottomBarProps) => {

  return (
    <BottomBarContainer>
      <AddTableIconContainer>
      <Link href={'/AddTable'} ><PlusSymbol /></Link>
      </AddTableIconContainer>
    </BottomBarContainer>
  )
}
const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background: ${props => props.theme.colors.hunter};
`
const AddTableIconContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

 
export default BottomBar
 
BottomBar.displayName = "BottomBar"