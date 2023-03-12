import WeeksDateCalendar from "./StyledDateCalendar";
import Modal from "../Modal";

interface DatePickerProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function DatePicker({ isOpen, onDismiss }: DatePickerProps) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <WeeksDateCalendar />
    </Modal>
  );
}
