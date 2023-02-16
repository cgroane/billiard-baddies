import type { Property } from 'csstype';
import type { StyledProps } from 'styled-components';
import { css } from 'styled-components';

export interface LayoutProps {
    display?: Property.Display;
    verticalAlign?: Property.VerticalAlign;
    height?: Property.Height;
    width?: Property.Width;
}

/**
 * Composes theme styles for layout CSS properties.
 */

export function layout(props: StyledProps<LayoutProps>): ReturnType<typeof css> {
    return css`
        display: ${props.display};
        vertical-align: ${props.verticalAlign};
        height: ${props.height};
        width: ${props.width};
    `;
}

export interface PositionProps {
  position?: Property.Position;
  top?: Property.Top;
  left?: Property.Left;
  right?: Property.Right;
  bottom?: Property.Bottom;
}
export const position = (props: StyledProps<PositionProps>): ReturnType<typeof css> => {
  return css`
    position: ${props.position};  
    top: ${props.top};  
    left: ${props.left};  
    right: ${props.right};  
    bottom: ${props.bottom};  
  `
}