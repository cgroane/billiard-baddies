import React, { RefObject, TouchEventHandler } from 'react'
import styled from 'styled-components'
 
interface ArrowProps {
}
const Arrow: React.FC<ArrowProps> = ({  }: ArrowProps) => {
  return (
    <>
    <svg width="30px" height="30px" viewBox="0 0 2543 778" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit :2}}>
      <g>
      <path d="M1265.83,0l-1226.46,712.282c-0,0 -0,0 -0,0.001c-8.043,13.099 -8.425,29.51 -1.001,42.97c7.423,13.46 21.507,21.893 36.877,22.08c1.138,0.013 1.764,0.021 1.764,0.021l1188.82,-687.654l-0,-89.7Z" style={{fill:'#fff'}}/>
      <path d="M1265.83,89.73l1189.38,686.687c0,-0 1.716,0.018 4.667,0.05c15.5,0.166 29.747,-8.491 36.739,-22.325c6.992,-13.834 5.513,-30.44 -3.813,-42.821c-0.004,-0.004 -0.006,-0.007 -0.006,-0.007l-1226.96,-711.314l-0,89.73Z" style={{fill:'#fff'}}/>
      </g>
    </svg>
</>
  )
}
 
export default Arrow
 
Arrow.displayName = "Arrow"