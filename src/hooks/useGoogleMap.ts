
import { useEffect, RefObject, useState, Dispatch, SetStateAction } from 'react';
import { PoolTable } from '@/types';
import { useCallback } from 'react';
import MarkerWindow from 'src/components/maps/MarkerWindow';
import { loadScript } from '@/utils/handleGoogleScriptLoad';

export const useGoogleMap = (divRef: RefObject<HTMLDivElement>, poolTables: PoolTable[], selectPoolTable: Dispatch<SetStateAction<PoolTable>>) => {
  const [userLocation, setUserLocation ] = useState<GeolocationCoordinates>()
  const [googleMap, setMap] = useState<google.maps.Map>({} as google.maps.Map)
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

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
          zoom: 10,
          center: {
            lat: userLocation?.latitude as number,
            lng: userLocation?.longitude as number
          },
        }
      );
      const markerWindow = new google.maps.InfoWindow()
      // The marker, positioned at Uluru
      const markers = poolTables.map((table) => {

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
          selectPoolTable(table);
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
  }, [poolTables, divRef, userLocation, selectPoolTable]);

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