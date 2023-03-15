import { useContext } from "react";
import styled from "styled-components";
import { DAYS_LIST } from "../../../constants/agenda";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import DaysLabels from "./DaysLabels";
import GridLayout from "../GridLayout";
import HoursLabels from "./HoursLabel";
import AgendaContext, {
  TimeInterval,
} from "../../../contexts/agenda/agenda-context";
import SelectedWeekLabel from "./SelectedWeekLabel";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div<{ timeInterval: TimeInterval }>`
  ${({ timeInterval, theme }) =>
    timeInterval === 15
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

const SelectedWeekWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.policeMedium};
  font-size: 10px;
  font-weight: 700;
`;

export default function Background() {
  const parametersCtx = useContext(ParametersContext);
  const agendaCtx = useContext(AgendaContext);
  const columnsNumber =
    agendaCtx.xInterval === "week"
      ? DAYS_LIST.length - parametersCtx.daysOff.length + 1
      : 2;
  const linesNumber =
    agendaCtx.timeInterval === 15
      ? parametersCtx.openingHours.length("hours") * 4 + 1
      : parametersCtx.openingHours.length("hours") * 2 + 1;
  const linesArray = Array.from({ length: linesNumber }, (_, index) =>
    index === linesNumber - 1 ? (
      <Line
        key={index}
        style={{ border: "none" }}
        timeInterval={agendaCtx.timeInterval}
      />
    ) : (
      <Line key={index} timeInterval={agendaCtx.timeInterval} />
    )
  );
  const columnsArray = Array.from({ length: columnsNumber }, (_, index) =>
    index === columnsNumber - 1 ? (
      <Column
        key={index}
        style={{
          border: "none",
          gridColumn: agendaCtx.xInterval === "week" ? "" : "2 / -1",
        }}
      />
    ) : (
      <Column key={index} />
    )
  );

  return (
    <Wrapper>
      <GridLayout>{linesArray}</GridLayout>
      <GridLayout>{columnsArray}</GridLayout>
      <GridLayout>
        <SelectedWeekWrapper>
          <SelectedWeekLabel />
        </SelectedWeekWrapper>
      </GridLayout>
      <GridLayout>
        <DaysLabels />
      </GridLayout>
      <GridLayout>
        <HoursLabels />
      </GridLayout>
    </Wrapper>
  );
}
