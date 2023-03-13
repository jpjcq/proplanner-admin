import { DateTime } from "luxon";
import { useContext } from "react";
import styled from "styled-components";
import { DAYS_LIST } from "../../../constants/agenda";
import AgendaContext, {
  AgendaContextType,
} from "../../../contexts/agenda/agenda-context";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import { BREAKPOINTS } from "../../../theme";
import { SmallSubHeader } from "../../../theme/text";

const Day = styled.div<{
  index: number;
  xInterval: AgendaContextType["xInterval"];
}>`
  grid-area: 1 / ${({ index }) => index + 2} / 2 /
    ${({ index, xInterval }) => (xInterval === "week" ? index + 3 : "last")};
  justify-self: center;
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledSmallSubHeader = styled(SmallSubHeader)`
  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 10px !important;
  }
  @media screen and (min-width: ${BREAKPOINTS.xs}px) and (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 10px !important;
  }
  @media screen and (min-width: ${BREAKPOINTS.sm}px) {
    font-size: 14px !important;
  }
`;

export default function DaysLabels() {
  const agendaCtx = useContext(AgendaContext);
  const parametersCtx = useContext(ParametersContext);
  const activeDays = DAYS_LIST.filter(day =>
    parametersCtx.daysOff.every(weekendDay => day !== weekendDay)
  );
  const daysToDisplay =
    agendaCtx.xInterval === "week"
      ? activeDays
      : [agendaCtx.selectedDay.weekdayLong];
  const daysToDisplayArray = daysToDisplay.map((day, index) => (
    <Day key={index} index={index} xInterval={agendaCtx.xInterval}>
      <StyledSmallSubHeader>{day}</StyledSmallSubHeader>
    </Day>
  ));
  return <>{daysToDisplayArray}</>;
}
