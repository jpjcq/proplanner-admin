import { DateTime } from "luxon";
import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import AgendaContext from "../../contexts/agenda/agenda-context";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import Calendar from "../Icons/Calendar";
import DayWeekSwitch from "./DayWeekSwitch";
import NavButton from "./NavButton";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px;
`;

interface NavbarProps {
  onDatePickerClick: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ onDatePickerClick }: NavbarProps) {
  const agendaCtx = useContext(AgendaContext);
  return (
    <Wrapper>
      <NavButton onClick={() => onDatePickerClick(true)}>
        <Calendar />
      </NavButton>
      <NavButton onClick={() => agendaCtx.setSelectedDay(DateTime.now())}>
        Aujourd'hui
      </NavButton>
      <NavButton
        onClick={() =>
          agendaCtx.xInterval === "week"
            ? agendaCtx.setSelectedDay(agendaCtx.selectedDay.minus({ week: 1 }))
            : agendaCtx.setSelectedDay(agendaCtx.selectedDay.minus({ day: 1 }))
        }
      >
        <ArrowLeft />
      </NavButton>
      <NavButton
        onClick={() =>
          agendaCtx.xInterval === "week"
            ? agendaCtx.setSelectedDay(agendaCtx.selectedDay.plus({ week: 1 }))
            : agendaCtx.setSelectedDay(agendaCtx.selectedDay.plus({ day: 1 }))
        }
      >
        <ArrowRight />
      </NavButton>
      <DayWeekSwitch />
      <NavButton onClick={() => agendaCtx.toogleTimeInterval()}>
        {agendaCtx.timeInterval}min
      </NavButton>
    </Wrapper>
  );
}
