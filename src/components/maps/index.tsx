import { useGoogleMap } from "@/hooks/useGoogleMap";
import { useRef } from 'react';
import styled from "styled-components";

interface MapProps {
}
const Map: React.FC<MapProps> = ({ }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  useGoogleMap(mapRef);

  return (
    <StyledMap ref={mapRef} />
  )
}

const StyledMap = styled.div`
  width: 100%;
  height: calc(100% - 6rem);

`
export default Map;