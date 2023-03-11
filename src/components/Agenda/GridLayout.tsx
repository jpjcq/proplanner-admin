import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import { AgendaContextType } from "../../contexts/agenda/agenda-context";
import { ParametersContextType } from "../../contexts/parameters/parameters-context";

type GridLayoutTimeFrame = AgendaContextType["timeInterval"] | 5;

const GridLayout = styled.div<{
  agendaCtx: AgendaContextType;
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
      ${({ agendaCtx, parametersCtx, customTimeFrame }) => {
        switch (customTimeFrame ? customTimeFrame : agendaCtx.timeInterval) {
          case 5:
            return parametersCtx.openingHours.length("hours") * 12;
          case 15:
            return parametersCtx.openingHours.length("hours") * 4;
          case 30:
            return parametersCtx.openingHours.length("hours") * 2;
        }
      }},
      1fr
    );
`;

export default GridLayout;
