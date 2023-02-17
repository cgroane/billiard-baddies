import { css, StyledProps } from "styled-components";
import { Scale } from "./global";
import type { Property } from 'csstype';
interface FontProps {
  fontSize: keyof FontSizeAlias;

}
export interface FontSizeAlias {
  smallest: string;
  small: string;
  medium: string;
  large: string;
}

type FontSizes = Scale<string, FontSizeAlias>;
const fontSizes = ['0.75rem', '1rem', '1.25rem', '1.5rem'] as FontSizes

export const fontSize = (props: StyledProps<FontProps>): ReturnType<typeof css> => css`
  font-size: ${props.fontSize ? fontSizes[props.fontSize] : props.fontSize};
`