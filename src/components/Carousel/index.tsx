import React, { useState } from 'react'
import styled from 'styled-components'
import { FixedPositionBox } from 'src/components/shared/index';
 
interface CarouselProps {
  carouselItems: string[];
}
const Carousel: React.FC<CarouselProps> = ({ carouselItems }: CarouselProps) => {
  const [carouselState, setCarouselState] = useState<number>(0);
  const [carouselPositions, setCarouselPositions] = useState<string[]>(
    [carouselItems[carouselState - 1], /** get with carouselPositions[0] */
    carouselItems[0], /** get with carouselPositions[1] */
    carouselItems[carouselState + 1]] /** get with carouselPositions[2] */
  );

  const onNavigatorClick = (incVal: -1 | 1) => {
    setCarouselState(carouselState + incVal);
  }
  return (
    <>
      <CarouselContainer>
        <CarouselNavigatorContainer left={'0'} onClick={() => onNavigatorClick(-1)} >{'<'}</CarouselNavigatorContainer>
        <CarouselImage src={carouselItems[carouselState]} />
        <CarouselNavigatorContainer right={'0'} onClick={() => onNavigatorClick(1)} >{'>'}</CarouselNavigatorContainer>
      </CarouselContainer>
    </>
  )
}
 

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  position: relative;
  z-index: 10;
`;
const CarouselNavigatorContainer = styled(FixedPositionBox)`
  color: white;
  background: rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
`;
const CarouselImage = styled.img`
  height: 100%;
  object-fit: fill;
  width: 100%;
`;
export default Carousel
 
Carousel.displayName = "Carousel"