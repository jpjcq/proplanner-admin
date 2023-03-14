import styled from "styled-components";
import Modal from "../../Modal";

const CardModal = styled.div``;

interface BookingCardModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function BookingCardModal({
  isOpen,
  onDismiss,
}: BookingCardModalProps) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <CardModal>
        <h1>Hello, world!</h1>
      </CardModal>
    </Modal>
  );
}
