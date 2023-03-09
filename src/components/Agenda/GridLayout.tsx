import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import { ParametersContextType } from "../../contexts/parameters/parameters-context";

const GridLayout = styled.div<{
  parametersCtx: ParametersContextType;
}>`
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 67px repeat(
      ${({ parametersCtx }) => DAYS_LIST.length - parametersCtx.daysOff.length},
      1fr
    );
  grid-template-rows: 64px repeat(
      ${({ parametersCtx }) =>
        parametersCtx.timeFrame === 15
          ? parametersCtx.openingHours.length("hours") * 4
          : parametersCtx.openingHours.length("hours") * 2},
      1fr
    );
`;

export default GridLayout;
