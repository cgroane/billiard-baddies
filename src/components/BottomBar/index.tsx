import { PoolTableContextWrapper, usePoolTableContext } from '@/state/PoolTablesProvider'
import { PoolTable } from '@/utils/handleGoogleScriptLoad'
import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import Arrow from '../Icons/Arrow'
import PlusSymbol from '../Icons/PlusSymbol'
import { layout, LayoutProps } from 'src/styles/layout';
import { flex, FlexProps } from '@/styles/flex'
import { FixedPositionBox, FlexBox } from '../shared'
 
interface BottomBarProps {
  tableData?: PoolTable
}
const BottomBar: React.FC<BottomBarProps> = ({ tableData, ...props }: BottomBarProps) => {

  return (
    <BottomBarContainer display={'flex'} flexDirection="column" position="fixed" bottom={0} right={0} left={0} width="100%" height={'6rem'} >
      <FormatDiv position='absolute' bottom={0} width={'%15'} height={'100%'}/>
      <MiddleDiv height={"100%"} width="100%" flexGrow={1} display="flex" flexDirection="column" alignItems="center" >
        <Arrow/>
        <div>
          
        </div>
      </MiddleDiv>
      <AddTableIconContainer
        display={'flex'}
        flexDirection="column"
        justifyContent={'center'}
        alignItems="center"
        position='absolute'
        right={0}
        top={0}
        width={'15%'}
        height={'100%'}
      >
      <Link href={'/AddTable'} >
        <PlusSymbol />
      </Link>
      </AddTableIconContainer>
    </BottomBarContainer>
  )
}

const BottomBarContainer = styled(FixedPositionBox)`
  background: ${props => props.theme.colors.black};
`
const AddTableIconContainer = styled(FixedPositionBox)`
`
const MiddleDiv = styled(FlexBox)`
`
const FormatDiv = styled(FixedPositionBox)`
`
 
export default BottomBar
 
BottomBar.displayName = "BottomBar"