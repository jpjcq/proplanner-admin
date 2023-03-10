import { useState } from "react";
import { Button } from "rebass";
import Agenda from "./components/Agenda";
import DatePicker from "./components/DatePicker";

export default function App() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  return (
    <>
      <Agenda />
      <DatePicker
        isOpen={isDatePickerOpen}
        onDismiss={() => setIsDatePickerOpen(false)}
      />
      <Button onClick={() => setIsDatePickerOpen(true)} style={{backgroundColor: "black"}}>Date Picker</Button>
    </>
  );
}