import { useGoogleMap } from "@/hooks/useGoogleMap";
import { useRef } from 'react';
import styled from "styled-components";
import { FlexBox } from "../shared";

interface MapProps {
}
const Map: React.FC<MapProps> = ({ }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  useGoogleMap(mapRef);

  return (
    <MapContainer height={'calc(100% - 8rem)'} width={'100%'}>
      <StyledMap ref={mapRef} />
    </MapContainer>
  )
}

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`
const MapContainer = styled(FlexBox)`
`
export default Map;