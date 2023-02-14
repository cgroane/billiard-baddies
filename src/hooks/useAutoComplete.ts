import { AutoCompleteChangeFunction, AutoCompleteElement, loadScript, PoolTableAutoFillData } from "@/utils/handleGoogleScriptLoad";
import { useCallback, useEffect, useState } from "react";
import { handleScriptLoad } from 'src/utils/handleGoogleScriptLoad';

export const useGoogleAutocomplete = (inputRef: AutoCompleteElement, initialVals: PoolTableAutoFillData) => {
  const { address } = initialVals;

  const [poolTableData, setPoolTableData] = useState({
    ...initialVals,
    address: {...address},
  })
  const onChange: AutoCompleteChangeFunction = useCallback((poolTable: PoolTableAutoFillData) => {
    setPoolTableData(poolTable);
  }, [setPoolTableData]);

  const handleChangeManual = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setPoolTableData({
        ...poolTableData,
        [e.target.name]: value
      })
    } else {
      setPoolTableData({
        ...poolTableData,
        address: {
          ...poolTableData.address,
          [name]: value
        }
      })
    }
  }
  useEffect(() => {
    if (loadScript) {
      setPoolTableData(poolTableData);
      loadScript(() => handleScriptLoad(onChange, inputRef));
    }
  }, [inputRef, poolTableData]);

  return { poolTableData, handleChangeManual };
};