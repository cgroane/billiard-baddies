import { flex, FlexProps } from "@/styles/flex";
import { fontSize } from "@/styles/fontSizes";
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
export const Span = styled.span`
  ${fontSize};
`
export const Header1 = styled.h1`
  ${fontSize};
`
export const Header2 = styled.h2`
  ${fontSize};
`
export const Paragraph = styled.p`
  ${fontSize};
`