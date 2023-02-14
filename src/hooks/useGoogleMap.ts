
import { useEffect, RefObject, useState } from 'react';
import { loadScript, PoolTable } from '@/utils/handleGoogleScriptLoad';

export const useGoogleMap = (divRef: RefObject<HTMLDivElement>, poolTables: PoolTable[]) => {
  const [userLocation, setUserLocation ] = useState<GeolocationCoordinates>()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => setUserLocation({
      ...success.coords,
      latitude: success.coords.latitude,
      longitude: success.coords.longitude,
    }))
  },[])
  const initMap = () => {
    console.log('map')
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
            lat: table.geometry?.location?.lat() as number,
            lng: table.geometry?.location?.lng() as number,
          },
          map: map,
        });
      })
    }
  }
  useEffect(() => {
    // if (userLocation) {
      loadScript(() => initMap())    
    // }
  }, [userLocation])
}