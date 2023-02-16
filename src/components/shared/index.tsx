import { flex, FlexProps } from "@/styles/flex";
import { layout, LayoutProps, position, PositionProps } from "@/styles/layout";
import styled from "styled-components";


export const FlexBox = styled.div<LayoutProps & FlexProps>`
  ${layout}
  ${flex}
`
export const FixedPositionBox = styled.div<LayoutProps & FlexProps & PositionProps>`
  ${layout}
  ${flex}
  ${position}
`