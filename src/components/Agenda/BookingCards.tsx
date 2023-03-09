import { useContext } from "react";
import styled from "styled-components";
import ParametersContext from "../../contexts/parameters/parameters-context";
import GridLayout from "./GridLayout";
//To fetch from db
import dummyBookings from "../../data/dummyBookings";
import { DateTime, Interval } from "luxon";

const actualWeek = Interval.fromDateTimes(DateTime.now(), )

const GridCell = styled.div`
  border: 1px solid red;
  grid-area: 1 / 1 / 4 / 4;
`;

export default function GridBookingCards() {
  dummyBookings.map(booking => <GridCell></GridCell>);
  const parametersCtx = useContext(ParametersContext);
  return (
    <GridLayout parametersCtx={parametersCtx} customTimeFrame={5}>
      <GridCell />
    </GridLayout>
  );
}
