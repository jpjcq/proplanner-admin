import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { DAYS_LIST } from "../../constants/agenda";
import AgendaContext, {
  AgendaContextType,
} from "../../contexts/agenda/agenda-context";
import ParametersContext, {
  ParametersContextType,
} from "../../contexts/parameters/parameters-context";

type GridLayoutTimeInterval = AgendaContextType["timeInterval"] | 5;

const Grid = styled.div<{
  agendaCtx: AgendaContextType;
  parametersCtx: ParametersContextType;
  bookingLayoutTimeInterval?: GridLayoutTimeInterval;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 67px repeat(
      ${({ agendaCtx, parametersCtx }) =>
        agendaCtx.xInterval === "week"
          ? DAYS_LIST.length - parametersCtx.daysOff.length
          : 1},
      1fr
    );
  grid-template-rows: 64px repeat(
      ${({ agendaCtx, parametersCtx, bookingLayoutTimeInterval }) => {
        if (bookingLayoutTimeInterval) {
          return parametersCtx.openingHours.length("hours") * 12;
        } else {
          switch (agendaCtx.timeInterval) {
            case 15:
              return parametersCtx.openingHours.length("hours") * 4;
            case 30:
              return parametersCtx.openingHours.length("hours") * 2;
          }
        }
      }},
      1fr
    );
`;

interface GridLayoutProps {
  children: ReactNode;
  bookingLayoutTimeInterval?: GridLayoutTimeInterval;
}

export default function GridLayout({
  children,
  bookingLayoutTimeInterval,
}: GridLayoutProps) {
  const agendaCtx = useContext(AgendaContext);
  const parametersCtx = useContext(ParametersContext);
  return (
    <Grid
      agendaCtx={agendaCtx}
      parametersCtx={parametersCtx}
      bookingLayoutTimeInterval={bookingLayoutTimeInterval}
    >
      {children}
    </Grid>
  );
}
