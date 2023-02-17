
import { usePoolTableContext } from '@/state/PoolTablesProvider'
import { PoolTable } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PlusSymbol from '../Icons/PlusSymbol'
import { FixedPositionBox, FlexBox, Span } from '../shared'
 
interface BottomBarProps {
  tableData?: PoolTable
}
const BottomBar: React.FC<BottomBarProps> = ({ ...props }: BottomBarProps) => {
  const poolContext = usePoolTableContext();
  
  const [expand, setExpand] = useState<{ full: boolean, initial: boolean }>({
    full: false, initial: false
  });

  const handleExpand = () => {
    setExpand({ ...expand, full: !expand.full });
  }
  // 
  return (
    <BottomBarContainer expand={expand.full} display={'flex'} flexDirection="column" position="fixed" bottom={0} right={0} left={0} width="100%" height={'6rem'} >
      <FormatDiv position='absolute' bottom={0} width={'%15'} height={'100%'}/>
      <MiddleDiv height={"100%"} width="100%" flexGrow={1} display="flex" flexDirection="column" alignItems="center" >
        <div
          onClick={handleExpand} 
          // onTouchMove={onArrowTouchMove}
          // onTouchEnd={onTouchEnd}
          // onTouchStart={onArrowTouch} 
        >
        {/* <Arrow /> */}
        </div>
        <TableContent>
          <Span fontSize='medium' >{poolContext.selectedTable?.name}</Span>
          {poolContext.selectedTable?.cost && (<div>
            <Span fontSize='small' >${poolContext.selectedTable?.cost} {poolContext.selectedTable?.rate}</Span>
          </div>)}
        </TableContent>
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
        expand={expand.full}
      >
      <Link href={'/AddTable'} >
        <PlusSymbol />
      </Link>
      </AddTableIconContainer>
    </BottomBarContainer>
  )
}
const expandBar = css`
  height: 100%;
  transform: translateY(100%);
  top: 0;
  position: fixed;
`
const TableContent = styled(FlexBox)`
  padding: 0.5rem;
  text-align: center;
`;
const BottomBarContainer = styled(FixedPositionBox)<{ expand?: boolean }>`
  /* background: ${props => props.theme.colors.black};
  transition: transform 0.5s linear;
  overflow-y: hidden;
  ${({expand}) => expand ? expandBar : ''}; */
`;
const AddTableIconContainer = styled(FixedPositionBox)<{ expand?: boolean }>`
  /* transition: opacity 0.3s linear;
  ${({expand}) => expand ? 'opacity: 0' : ''}; */
`;
const MiddleDiv = styled(FlexBox)`
`;
const FormatDiv = styled(FixedPositionBox)`
`;
 
export default BottomBar
 
BottomBar.displayName = "BottomBar"

/**
 * future feature?
 * const arrowRef = useRef<HTMLDivElement>(null);
  const [touchLanding, setTouchLanding] = useState<{ start: number; end: number}>({
    start: arrowRef?.current?.getBoundingClientRect().y as number,
    end: arrowRef?.current?.getBoundingClientRect().y as number,
  });
 * const onArrowTouch: TouchEventHandler<HTMLDivElement> = (e) => {
  //   setTouchLanding({
  //     ...touchLanding,
  //     start: e.touches[0].pageY
  //   })
  //   setExpand({ ...expand, initial: true });
  // }
  // const onArrowTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
  //   setTouchLanding({
  //     ...touchLanding,
  //     end: e.touches[0].pageY
  //   })
  // }
  // const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
  //   if (touchLanding?.start < touchLanding?.end) {
  //     setExpand({ ...expand, full: true });
  //   } else if (touchLanding?.start > touchLanding?.end) {
  //     setExpand({ initial: false, full: false });
  //   }
  // }

  // // useEffect(() => {
  // //   if (touchLanding?.start < touchLanding?.end) {
  // //     setExpand({ ...expand, full: true });
  // //   } else if (touchLanding?.start > touchLanding?.end) {
  // //     setExpand({ initial: false, full: false });
  // //   }
  // // }, [setExpand, touchLanding]);
 */