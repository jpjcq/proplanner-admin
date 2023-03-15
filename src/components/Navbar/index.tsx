import { DateTime } from "luxon";
import { Dispatch, RefObject, SetStateAction, useContext } from "react";
import styled, { useTheme } from "styled-components";
import AgendaContext from "../../contexts/agenda/agenda-context";
import SliderContext from "../../contexts/slider/slider-context";
import { Theme } from "../../theme/colors";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import Bell from "../Icons/Bell";
import Calendar from "../Icons/Calendar";
import SearchBar from "../SearchBar";
import DayWeekSwitch from "./DayWeekSwitch";
import NavButton from "./NavButton";
import PageSwitcher from "./PageSwitcher";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px;
`;

const ArrowsWrapper = styled.div`
  display: flex;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

interface NavbarProps {
  onDatePickerClick: Dispatch<SetStateAction<boolean>>;
  goToSlide: (index: number) => void;
  searchBarContent: Dispatch<SetStateAction<string>>;
}

export default function Navbar({
  onDatePickerClick,
  goToSlide,
  searchBarContent,
}: NavbarProps) {
  const agendaCtx = useContext(AgendaContext);
  const sliderCtx = useContext(SliderContext);
  const theme = useTheme() as Theme;
  return (
    <Wrapper>
      <PageSwitcher goToSlide={goToSlide} />
      {sliderCtx.activeSlider === 0 && (
        <>
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
                  : agendaCtx.setSelectedDay(
                      agendaCtx.selectedDay.plus({ day: 1 })
                    )
              }
            >
              <ArrowRight />
            </NavButton>
          </ArrowsWrapper>
          <DayWeekSwitch />
          <NavButton onClick={() => agendaCtx.toogleTimeInterval()}>
            {agendaCtx.timeInterval}min
          </NavButton>
        </>
      )}
      {sliderCtx.activeSlider === 1 && (
        <>
          <SearchBar
            placeholder="Chercher un client par nom ou par téléphone"
            whileFocus={{ boxShadow: theme.boxShadowMedium.inset }}
            transition={spring}
            onChange={e => searchBarContent(e.target.value)}
          />
        </>
      )}
      <NavButton>
        <Bell />
      </NavButton>
    </Wrapper>
  );
}
