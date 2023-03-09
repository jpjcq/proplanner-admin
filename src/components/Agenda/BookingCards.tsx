import { useContext } from "react";
import styled from "styled-components";
import ParametersContext from "../../contexts/parameters/parameters-context";
import GridLayout from "./GridLayout";

const GridCell = styled.div`
  border: 1px solid red;
  grid-area: 1 / 1 / 4 / 4;
`;

export default function GridBookingCards() {
  const parametersCtx = useContext(ParametersContext);
  return (
    <GridLayout timeFrame={30} parametersCtx={parametersCtx}>
      <GridCell />
    </GridLayout>
  );
}
