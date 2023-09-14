import { useContext } from "react";
import { DayPicker } from "react-day-picker";
import { DateTime } from "luxon";
import { fr } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { Root, Trigger, Portal } from "@radix-ui/react-dialog";
import AgendaContext from "../../contexts/agenda/agenda-context";
import { StyledOverlay, StyledContent } from "../Modal";
import NavButton from "../Navbar/NavButton";
import Calendar from "../Icons/Calendar";

export default function DatePicker() {
  const agendaCtx = useContext(AgendaContext);

  return (
    <Root>
      <Trigger asChild>
        <NavButton>
          <Calendar />
        </NavButton>
      </Trigger>
      <Portal>
        <StyledOverlay />
        <StyledContent>
          <DayPicker
            mode="single"
            selected={DateTime.now().toJSDate()}
            onSelect={(_, selectedDay) =>
              agendaCtx.setSelectedDay(DateTime.fromJSDate(selectedDay))
            }
            locale={fr}
            initialFocus
          />
        </StyledContent>
      </Portal>
    </Root>
  );
}
