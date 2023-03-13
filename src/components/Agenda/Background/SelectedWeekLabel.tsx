import { useContext } from "react";
import styled from "styled-components";
import AgendaContext from "../../../contexts/agenda/agenda-context";
import getWeek from "../../../utils/getWeek";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.borderLight};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.boxShadowMedium.outset};
  padding: 6px;
`;

export default function SelectedWeekLabel() {
  const agendaCtx = useContext(AgendaContext);
  const selectedWeek = getWeek(agendaCtx.selectedDay);
  return (
    <Card>
      <span>
        {selectedWeek.start.toLocaleString({ day: "numeric" })}&nbsp;/&nbsp;
        {selectedWeek.start.toLocaleString({ month: "numeric" })}
      </span>
      <span>-</span>
      <span>
        {selectedWeek.end.toLocaleString({ day: "numeric" })}&nbsp;/&nbsp;
        {selectedWeek.end.toLocaleString({ month: "numeric" })}
      </span>
    </Card>
  );
}
