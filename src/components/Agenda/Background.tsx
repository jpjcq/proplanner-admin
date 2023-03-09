import { useContext } from "react";
import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import ParametersContext from "../../contexts/parameters/parameters-context";
import { TimeFrame } from "../../types/agenda";
import Clock from "../Icons/Clock";
import DaysLabels from "./DaysLabels";
import GridLayout from "./GridLayout";
import HoursLabels from "./HoursLabel";

const Line = styled.div<{ timeFrame: 15 | 30 }>`
  ${({ timeFrame, theme }) =>
    timeFrame === 15
      ? `border-bottom: 1px solid ${theme.colors.borderLight};
  grid-column: 2 / span last;

  &:nth-child(4n - 3) {
    border-bottom: 1px solid ${theme.colors.borderMedium};
    grid-column: 1 / span last;
  }
  &:nth-child(4n-1) {
    border-bottom: 1px solid ${theme.colors.borderMedium};
  }`
      : `&:nth-child(even) {
    border-bottom: 1px solid ${theme.colors.borderLight};
    grid-column: 2 / span last;
  }
  &:nth-child(odd) {
    border-bottom: 1px solid ${theme.colors.borderMedium};
    grid-column: 1 / span last;
  }`}
`;

const Column = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.borderMedium};
  grid-row: 1 / span last;
`;

const ClockWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;
  align-self: center;
`;

interface GridBackgroundProps {
  timeFrame: TimeFrame;
}

export default function GridBackground({ timeFrame }: GridBackgroundProps) {
  const parametersCtx = useContext(ParametersContext);
  const columnsNumber = DAYS_LIST.length - parametersCtx.daysOff.length + 1;
  const linesNumber =
    timeFrame === 15
      ? parametersCtx.openingHours.length("hours") * 4 + 1
      : parametersCtx.openingHours.length("hours") * 2 + 1;
  const linesArray = Array.from({ length: linesNumber }, (_, index) =>
    index === linesNumber - 1 ? (
      <Line key={index} style={{ border: "none" }} timeFrame={timeFrame} />
    ) : (
      <Line key={index} timeFrame={timeFrame} />
    )
  );
  const columnsArray = Array.from({ length: columnsNumber }, (_, index) =>
    index === columnsNumber - 1 ? (
      <Column key={index} style={{ border: "none" }} />
    ) : (
      <Column key={index} />
    )
  );

  return (
    <>
      <GridLayout timeFrame={timeFrame} parametersCtx={parametersCtx}>
        {linesArray}
      </GridLayout>
      <GridLayout timeFrame={timeFrame} parametersCtx={parametersCtx}>
        {columnsArray}
      </GridLayout>
      <GridLayout timeFrame={timeFrame} parametersCtx={parametersCtx}>
        <ClockWrapper>
          <Clock />
        </ClockWrapper>
      </GridLayout>
      <GridLayout timeFrame={timeFrame} parametersCtx={parametersCtx}>
        <DaysLabels />
      </GridLayout>
      <GridLayout timeFrame={timeFrame} parametersCtx={parametersCtx}>
        <HoursLabels />
      </GridLayout>
    </>
  );
}
