import { DateTime } from "luxon";
import { useContext } from "react";
import styled from "styled-components";
import ParametersContext from "../../contexts/parameters/parameters-context";
import { SmallSubHeader } from "../theme/text";

const Hour = styled.div<{ index: number; total: number }>`
  justify-self: center;
  align-self: center;

  ${({ index, total }) => {
    let css = "";
    for (let i = 1; i <= total; i++) {
      css += `
        &:nth-child(${i}) {
          grid-area: ${index + i + 1} / 1 / ${index + i + 3} / 2;
        }
      `;
    }
    return css;
  }}
`;

export default function HoursLabels() {
  const parametersCtx = useContext(ParametersContext);

  const hoursToDisplay: DateTime[] = [];
  let hourToPush = parametersCtx.openingHours.start;
  while (hourToPush < parametersCtx.openingHours.end) {
    hoursToDisplay.push(hourToPush);
    hourToPush = hourToPush.plus({ hour: 1 });
  }

  const hours = hoursToDisplay.map((hour, index, array) => (
    <Hour key={index} index={index} total={array.length}>
      <SmallSubHeader>{hour.hour}</SmallSubHeader>
    </Hour>
  ));

  return <>{hours}</>;
}
