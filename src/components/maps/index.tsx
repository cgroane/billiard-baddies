import { useGoogleMap } from "@/hooks/useGoogleMap";
import { PoolTable } from "@/utils/handleGoogleScriptLoad";
import { useRef } from 'react';
import styled from "styled-components";

interface MapProps {
  poolTables: PoolTable[]
}
const Map: React.FC<MapProps> = ({ poolTables }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  useGoogleMap(mapRef, poolTables)
  return (
    <StyledMap ref={mapRef} />
  )
}

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
  
`
export default Map;