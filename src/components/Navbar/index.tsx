import { DateTime } from "luxon";
import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import AgendaContext from "../../contexts/agenda/agenda-context";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import Bell from "../Icons/Bell";
import Calendar from "../Icons/Calendar";
import DayWeekSwitch from "./DayWeekSwitch";
import NavButton from "./NavButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px;
`;

const ArrowsWrapper = styled.div`
  display: flex;
`;

interface NavbarProps {
  onDatePickerClick: Dispatch<SetStateAction<boolean>>;
  activeSlide: number;
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
      <ArrowsWrapper>
        <NavButton
          onClick={() =>
            agendaCtx.xInterval === "week"
              ? agendaCtx.setSelectedDay(
                  agendaCtx.selectedDay.minus({ week: 1 })
                )
              : agendaCtx.setSelectedDay(
                  agendaCtx.selectedDay.minus({ day: 1 })
                )
          }
          style={{ marginRight: "8px" }}
        >
          <ArrowLeft />
        </NavButton>
        <NavButton
          onClick={() =>
            agendaCtx.xInterval === "week"
              ? agendaCtx.setSelectedDay(
                  agendaCtx.selectedDay.plus({ week: 1 })
                )
              : agendaCtx.setSelectedDay(agendaCtx.selectedDay.plus({ day: 1 }))
          }
        >
          <ArrowRight />
        </NavButton>
      </ArrowsWrapper>
      <DayWeekSwitch />
      <NavButton onClick={() => agendaCtx.toogleTimeInterval()}>
        {agendaCtx.timeInterval}min
      </NavButton>
      <NavButton>
        <Bell />
      </NavButton>
    </Wrapper>
  );
}
