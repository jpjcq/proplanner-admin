import { useState } from "react";
import Agenda from "./components/Agenda";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";

export default function App() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
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
