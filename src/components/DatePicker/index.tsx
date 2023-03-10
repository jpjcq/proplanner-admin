import WeeksDateCalendar from "./StyledDateCalendar";
import { DateTime } from "luxon";
import { useState } from "react";
import Modal from "../Modal";

interface DatePickerProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function DatePicker({ isOpen, onDismiss }: DatePickerProps) {
  const [value, setValue] = useState<DateTime | null>(DateTime.now());
  console.log(value);
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <WeeksDateCalendar value={value} setValue={setValue} />
    </Modal>
  );
}
