
import { useEffect, RefObject, useState } from 'react';
import { loadScript, PoolTable } from '@/utils/handleGoogleScriptLoad';
import { useCallback } from 'react';

export const useGoogleMap = (divRef: RefObject<HTMLDivElement>, poolTables: PoolTable[]) => {
  const [userLocation, setUserLocation ] = useState<GeolocationCoordinates>()
  const [googleMap, setMap] = useState<google.maps.Map>({} as google.maps.Map)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => setUserLocation({
      ...success.coords,
      latitude: success.coords.latitude,
      longitude: success.coords.longitude,
    }))
  },[])
  const initMap = useCallback(() => {
    // The map, centered at Uluru
    if (!!window && window.google) {
      const map = new google.maps.Map(
        divRef.current as HTMLElement,
        {
          zoom: 4,
          center: {
            lat: userLocation?.latitude as number,
            lng: userLocation?.longitude as number
          },
        }
      );
      
      // The marker, positioned at Uluru
      const markerGenerator = poolTables.map((table) => {
        new google.maps.Marker({
          position: {
            lat: table?.coordinates?.lat,
            lng: table?.coordinates?.lng,
          },
          map: map,
        });
      })
      setMap(map);
    }
  }, [poolTables, divRef, userLocation]);

  useEffect(() => {
    // if (userLocation) {
      loadScript(() => initMap())    
    // }
  }, [userLocation, initMap])

  const recenter = () => {
    googleMap.setCenter({
      lat: userLocation?.latitude as number,
      lng: userLocation?.longitude as number
    })
  }
}