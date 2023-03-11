import { useContext, useState } from "react";
import { Button } from "rebass";
import Agenda from "./components/Agenda";
import DatePicker from "./components/DatePicker";
import AgendaContext from "./contexts/agenda/agenda-context";

export default function App() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const agendaCtx = useContext(AgendaContext);
  return (
    <>
      <Agenda />
      <DatePicker
        isOpen={isDatePickerOpen}
        onDismiss={() => setIsDatePickerOpen(false)}
      />
      <Button
        onClick={() => setIsDatePickerOpen(true)}
        style={{ backgroundColor: "black", marginLeft: "50px" }}
      >
        Date Picker
      </Button>
      <Button
        onClick={() => agendaCtx.toogleTimeFrame()}
        style={{ backgroundColor: "black", marginLeft: "50px" }}
      >
        Toogle TimeFrame
      </Button>
    </>
  );
}
