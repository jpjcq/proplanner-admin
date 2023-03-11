import { DateTime } from "luxon";
import { useContext } from "react";
import styled from "styled-components";
import AgendaContext, {
  TimeInterval,
} from "../../../contexts/agenda/agenda-context";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import { SmallSubHeader } from "../../../theme/text";

const Hour = styled.div<{
  index: number;
  total: number;
  timeInterval: TimeInterval;
}>`
  justify-self: center;
  align-self: center;

  ${({ index, total, timeInterval }) => {
    let css = "";
    if (timeInterval === 15) {
      for (let i = 1; i <= total; i++) {
        css += `
        &:nth-child(${i}) {
          grid-area: ${index + i * 3} / 1 / ${index + i * 3 + 2} / 2;
        }
      `;
      }
      return css;
    } else {
      for (let i = 1; i <= total; i++) {
        css += `
        &:nth-child(${i}) {
          grid-area: ${index + i + 1} / 1 / ${index + i + 3} / 2;
        }
      `;
      }
      return css;
    }
  }}
`;

export default function HoursLabels() {
  const parametersCtx = useContext(ParametersContext);
  const agendaCtx = useContext(AgendaContext);

  const hoursToDisplay: DateTime[] = [];
  let hourToPush = parametersCtx.openingHours.start;
  while (hourToPush < parametersCtx.openingHours.end) {
    hoursToDisplay.push(hourToPush);
    hourToPush = hourToPush.plus({ hour: 1 });
  }

  const hours = hoursToDisplay.map((hour, index, array) => (
    <Hour
      key={index}
      index={index}
      total={array.length}
      timeInterval={agendaCtx.timeInterval}
    >
      <SmallSubHeader>{hour.hour}</SmallSubHeader>
    </Hour>
  ));

  return <>{hours}</>;
}
