
import { usePoolTableContext } from '@/state/PoolTablesProvider'
import { PoolTable } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Arrow from '../Icons/Arrow'
import PlusSymbol from '../Icons/PlusSymbol'
import { FixedPositionBox, FlexBox, Span, StyledLink } from '../shared'
 
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
  
  return (
    <BottomBarContainer expand={expand.full} position="relative" display={'flex'} flexDirection="column" width="100%"  >
      <FormatDiv position='absolute' bottom={0} width={'15%'} height={'100%'}/>
      <MiddleDiv height={"100%"} width="100%" flexGrow={1} display="flex" flexDirection="column" alignItems="center" >
        <div
          onClick={handleExpand} 
          // onTouchMove={onArrowTouchMove}
          // onTouchEnd={onTouchEnd}
          // onTouchStart={onArrowTouch} 
        >
        <Arrow />
        </div>
        <TableContent>
          <Span fontSize='medium' >{poolContext.selectedTable?.name}</Span>
          {poolContext.selectedTable?.cost && (<div>
            <Span fontSize='small' >${poolContext.selectedTable?.cost} {poolContext.selectedTable?.rate}</Span>
          </div>)}
          {poolContext.selectedTable.name && <StyledLink href={{
            query: { form: 'edit' },
            pathname: '/AddTable'
          }} >
            <Span fontSize='medium' >Edit</Span>
          </StyledLink>}
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
        height={'8rem'}
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
  transform: translateY(calc(-100% + 8rem));
`
const TableContent = styled(FlexBox)`
  padding: 0.5rem;
  text-align: center;
`;
const BottomBarContainer = styled(FixedPositionBox)<{ expand?: boolean }>`
  transition: transform 0.5s linear;
  background: ${props => props.theme.colors.black};
  overflow-y: hidden;
  height: 100%;
  ${({expand}) => expand ? expandBar : ''};
`;
const AddTableIconContainer = styled(FixedPositionBox)<{ expand?: boolean }>`
  transition: opacity 0.3s linear;
  ${({expand}) => expand ? 'opacity: 0' : ''};
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