import { AutoCompleteChangeFunction, AutoCompleteElement, loadScript, PoolTableAutoFillData } from "@/utils/handleGoogleScriptLoad";
import { useEffect, useState } from "react";
import { handleScriptLoad } from 'src/utils/handleGoogleScriptLoad';

export const useGoogleAutocomplete = (inputRef: AutoCompleteElement, initialVals: PoolTableAutoFillData) => {
  const { address } = initialVals;

  const [poolTableData, setPoolTableData] = useState({
    ...initialVals,
    address: {...address},
  })
  const onChange: AutoCompleteChangeFunction = (poolTable: PoolTableAutoFillData) => {
    setPoolTableData({...poolTableData, ...poolTable});
  };
  useEffect(() => {
    if (loadScript) {
      setPoolTableData(poolTableData);
      loadScript(() => handleScriptLoad(onChange, inputRef));
    }
  }, [inputRef]);

  return poolTableData;
};