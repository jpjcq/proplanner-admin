import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import { ParametersContextType } from "../../contexts/parameters/parameters-context";

type GridLayoutTimeFrame = ParametersContextType["timeFrame"] | 5;

const GridLayout = styled.div<{
  parametersCtx: ParametersContextType;
  customTimeFrame?: GridLayoutTimeFrame;
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
      ${({ parametersCtx, customTimeFrame }) => {
        switch (customTimeFrame ? customTimeFrame : parametersCtx.timeFrame) {
          case 5:
            return parametersCtx.openingHours.length("hours") * 12;
            break;
          case 15:
            return parametersCtx.openingHours.length("hours") * 4;
            break;
          case 30:
            return parametersCtx.openingHours.length("hours") * 2;
            break;
        }
      }},
      1fr
    );
`;

export default GridLayout;
