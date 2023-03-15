import { DateTime } from "luxon";
import { useContext } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AgendaContext from "../../contexts/agenda/agenda-context";
import Modal, { ModalProps } from "../Modal";
import { fr } from "date-fns/locale";

interface DatePicker extends ModalProps {}

function weekSelecter(day: DateTime): Date[] {
  const selectedWeekStart = day.startOf("week");
  const selectedWeekEnd = day.endOf("week");
  const selectedWeekDays = [];

  for (
    let date = selectedWeekStart;
    date <= selectedWeekEnd;
    date = date.plus({ days: 1 })
  ) {
    selectedWeekDays.push(date.toJSDate());
  }
  return selectedWeekDays;
}

export default function DatePicker({ isOpen, onDismiss }: DatePicker) {
  const agendaCtx = useContext(AgendaContext);
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <DayPicker
        mode="single"
        selected={DateTime.now().toJSDate()}
        onSelect={(day, selectedDay) =>
          agendaCtx.setSelectedDay(DateTime.fromJSDate(selectedDay))
        }
        locale={fr}
        initialFocus
        // showOutsideDays
      />
    </Modal>
  );
}
