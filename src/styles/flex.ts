import type { Property } from 'csstype';
import type { StyledProps } from 'styled-components';
import { css } from 'styled-components';

export interface FlexProps {
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  flexGrow?: Property.FlexGrow
}
export const flex = (props: StyledProps<FlexProps>): ReturnType<typeof css> => {
  return css`
    flex-direction: ${props.flexDirection};
    flex-wrap: ${props.flexWrap};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
    flex-grow: ${props.flexGrow};
  `
}