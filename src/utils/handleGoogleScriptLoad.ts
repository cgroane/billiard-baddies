import React, { Dispatch, RefObject, useEffect, useState, SetStateAction } from 'react';
import { useCallback } from 'react';

export type AutoCompleteChangeFunction = (poolTable: PoolTableAutoFillData) => void;
export type AutoCompleteElement = RefObject<HTMLInputElement>;
export type HandeScriptLoadFuncType = <T>(changeFunction:AutoCompleteChangeFunction, autoCompleteElementRef: AutoCompleteElement) => void;

export const handleScriptLoad: HandeScriptLoadFuncType = <T>(changeFunction: AutoCompleteChangeFunction, autoCompleteElementRef: AutoCompleteElement) => {
  if (!!window && !!window.google) {
    let autoComplete = new window.google.maps.places.Autocomplete(autoCompleteElementRef.current as HTMLInputElement);
    autoComplete.addListener('place_changed', () => handlePlaceSelect(changeFunction, autoComplete));
  }
};

// () => handleScriptLoad(onChange, inputRef)
// type LoadScriptCallback


/** this function loads the google maps api script with env variable */
export const loadScript = (callback: any) => {
  const googleScriptElement = document.getElementById('google-places-script');
  if (!googleScriptElement) {
    let script = document.createElement('script');
    script.type = 'text/javascript';

    if (document.readyState) {
      document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
          document.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_AUTOCOMPLETE_KEY}&libraries=places&callback=Function.prototype`;
    script.async = true;
    script.id = 'google-places-script';
    document.getElementsByTagName('head')[0].appendChild(script);

  } else if (googleScriptElement) {
    callback();
  }
};

/**
 * this function instantiates google autocomplete on the autocomplete ref passed in from the component
 * it adds an event listener to the ref, when refs value changes, the callback is invoked
 */



/**
 * this function is the call back in handleScriptLoad above
 * it fetches from google api and calls change function, which follows this chain
 * useGoogleAutoComplete -> handlescriptload -> handleplaceselect
 */

export async function handlePlaceSelect(changeFunction: AutoCompleteChangeFunction, autoComplete: google.maps.places.Autocomplete) {
  const placeObject = autoComplete.getPlace()
  const addressObject = autoComplete.getPlace().address_components;
  if (addressObject) {
    const updateVals: Address = {
      address: `${getAddressPart('street_number', addressObject)} ${getAddressPart('route', addressObject)}`,
      address2: '',
      city: getAddressPart('locality', addressObject),
      state: getAddressPart('administrative_area_level_1', addressObject, true),
      postalCode: getAddressPart('postal_code', addressObject)
    };

    const poolTabledata: google.maps.places.PlaceResult = {
      ...placeObject

    }
    changeFunction({ address: {...updateVals}, ...poolTabledata });
  }
}

/**
 * Gets a part of the address from the passed in address array
 *
 * @param addressPart The key to look for in the address array
 * @param addressArray The address array
 * @param shortName Use the short name of the address part.
 * @return {string}
 */
const getAddressPart = (addressPart: string, addressArray: google.maps.GeocoderAddressComponent[], shortName = false) => {
  const findPartIndex = (element: google.maps.GeocoderAddressComponent) => {
    return element.types[0] && element.types[0] === addressPart;
  };
  let part = addressArray.findIndex(findPartIndex);
  if (shortName) {
    return part > -1 ? addressArray[part].short_name : '';
  } else {
    return part > -1 ? addressArray[part].long_name : '';
  }
};

/**
 * below is a hook that uses state to store an address object
 * it has an onchange event to update address, onchange is defined to receive a complete address object, seen in handlePlaceSelect
 * it's the 'changeFunction' seen throughout the document
 * returns the address
 */
export interface Address {
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
}
export interface PoolTableAutoFillData extends google.maps.places.PlaceResult {
  address: Address;
}

export interface PoolTable extends PoolTableAutoFillData {
  cost: number;
}

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