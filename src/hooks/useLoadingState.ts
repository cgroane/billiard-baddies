
import { useState } from 'react';
import * as Realm from 'realm-web'

export enum LoadingStates {
  LOADING = 'loading',
  IDLE = 'idle',
  FAILED = 'failed'
}
export const useLoadingState = () => {
  const [loading, setLoading] = useState<LoadingStates>(LoadingStates.IDLE);
  return {loading, setLoading};
}