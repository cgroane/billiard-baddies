import { useGoogleMap } from "@/hooks/useGoogleMap";
import { PoolTable } from "@/types";
import { Dispatch, SetStateAction, useRef } from 'react';
import styled from "styled-components";

interface MapProps {
  poolTables: PoolTable[];
  setSelectedTable: Dispatch<SetStateAction<PoolTable>>;
}
const Map: React.FC<MapProps> = ({ poolTables, setSelectedTable }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  useGoogleMap(mapRef, poolTables, setSelectedTable)

  return (
    <StyledMap ref={mapRef} />
  )
}

const StyledMap = styled.div`
  width: 100%;
  height: calc(100% - 6rem);

`
export default Map;