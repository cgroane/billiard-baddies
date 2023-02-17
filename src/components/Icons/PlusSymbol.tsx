import { theme } from '@/styles/global';
import React from 'react'
 
interface PlusSymbolProps {
  fill?: string;
}
const PlusSymbol: React.FC<PlusSymbolProps> = ({ fill = theme.colors.white }: PlusSymbolProps) => {
  return (
    <>
      <svg width="24" fill={fill} height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>
    </>
  );
}
 
export default PlusSymbol
 
PlusSymbol.displayName = "PlusSymbol"