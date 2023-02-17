
import { useEffect, RefObject, useState } from 'react';
import { useCallback } from 'react';
import { loadScript } from '@/utils/handleGoogleScriptLoad';
import { usePoolTableContext } from '@/state/PoolTablesProvider';

export const useGoogleMap = (divRef: RefObject<HTMLDivElement>) => {
  const [userLocation, setUserLocation ] = useState<GeolocationCoordinates>()
  const [googleMap, setMap] = useState<google.maps.Map>({} as google.maps.Map)
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const poolContext = usePoolTableContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => setUserLocation({
      ...success.coords,
      latitude: success.coords.latitude,
      longitude: success.coords.longitude,
    }))
  },[])

  const initMap = useCallback(() => {
    if (!!window && window.google) {
      const map = new google.maps.Map(
        divRef.current as HTMLElement,
        {
          zoom: 10,
          center: {
            lat: userLocation?.latitude as number,
            lng: userLocation?.longitude as number
          },
        }
      );
      const markerWindow = new google.maps.InfoWindow()
      const markers = poolContext.poolTables.map((table) => {

        const newMarker = new google.maps.Marker({
          position: {
            lat: table?.coordinates?.lat,
            lng: table?.coordinates?.lng,
          },
          map: map,
          clickable: true,
          title: table.name,
        });
        newMarker.addListener('click', () => {
          poolContext.setSelectedTable(table);
          markerWindow.setContent(`<div style="color: black" >${table.name}</div>`);
          markerWindow.open({
            anchor: newMarker,
            shouldFocus: false,
            map
          })
        })
        return newMarker
      });
      setMarkers(markers);
      setMap(map);
    }
  }, [poolContext.poolTables, divRef, userLocation, poolContext.setSelectedTable]);

  useEffect(() => {
    // if (userLocation) {
      loadScript(() => initMap())    
    // }
  }, [userLocation, initMap])

  const recenter = useCallback(() => {
    googleMap.setCenter({
      lat: userLocation?.latitude as number,
      lng: userLocation?.longitude as number
    })
  }, [googleMap, userLocation])
}