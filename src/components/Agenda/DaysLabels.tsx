import { useContext } from "react";
import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import ParametersContext from "../../contexts/parameters/parameters-context";
import { BREAKPOINTS } from "../theme";
import { SmallSubHeader } from "../theme/text";

const Day = styled.div<{ index: number }>`
  grid-area: 1 / ${({ index }) => index + 2} / 2 / ${({ index }) => index + 3};
  justify-self: center;
  align-self: center;
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
  const parametersCtx = useContext(ParametersContext);
  const activeDays = DAYS_LIST.filter(day =>
    parametersCtx.daysOff.every(weekendDay => day !== weekendDay)
  );
  const daysToDisplay = activeDays.map((day, index) => (
    <Day key={index} index={index}>
      <StyledSmallSubHeader>{day}</StyledSmallSubHeader>
    </Day>
  ));
  return <>{daysToDisplay}</>;
}
