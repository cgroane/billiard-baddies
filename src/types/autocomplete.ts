
import { RefObject } from 'react';
import { PoolTableAutoFillData } from './pool';

export type AutoCompleteChangeFunction = (poolTable: PoolTableAutoFillData) => void;
export type AutoCompleteElement = RefObject<HTMLInputElement>;
export type HandeScriptLoadFuncType = <T>(changeFunction:AutoCompleteChangeFunction, autoCompleteElementRef: AutoCompleteElement) => void;