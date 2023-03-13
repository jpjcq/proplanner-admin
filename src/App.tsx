import { useContext, useState } from "react";
import { Button } from "rebass";
import Agenda from "./components/Agenda";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import AgendaContext from "./contexts/agenda/agenda-context";

export default function App() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const agendaCtx = useContext(AgendaContext);
  return (
    <>
      <Navbar onDatePickerClick={setIsDatePickerOpen} />
      <Agenda />
      <DatePicker
        isOpen={isDatePickerOpen}
        onDismiss={() => setIsDatePickerOpen(false)}
      />
    </>
  );
}
