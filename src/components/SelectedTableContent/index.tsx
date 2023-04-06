import React from 'react'
import styled from 'styled-components'
import { PoolTable } from '@/types';
import Carousel from '../Carousel';
 
interface SelectedTableContentProps {
  poolTable: PoolTable;
}
const SelectedTableContent: React.FC<SelectedTableContentProps> = ({ poolTable }: SelectedTableContentProps) => {
  const { photoURLs } = poolTable;
  console.log(photoURLs?.map((photo) => photo));
  return (
    <>
      <Carousel carouselItems={photoURLs} ></Carousel>
    </>
  )
}
 
export default SelectedTableContent

const ImageContainer = styled.div`

`
 
SelectedTableContent.displayName = "SelectedTableContent"