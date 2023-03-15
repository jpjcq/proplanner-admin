import styled from "styled-components";
import Modal from "../Modal";
import { SmallHeadline } from "../../theme/text";
import { ModalInput } from "../Input";
import { SeparatorMedium } from "../Separator";
import CheckboxChecked from "../Icons/CheckboxChecked";
import { PrimaryButton, SecondaryButton } from "../Button";

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.policeDark};
  min-width: 200px;
`;

const SMS = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.policeDark};
`;

const ButtonsWrapper = styled.div``;

interface CreateCustomerModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function CreateCustomerModal({
  isOpen,
  onDismiss,
}: CreateCustomerModalProps) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <CardModal>
        <Line>
          <Label>
            <SmallHeadline>Cliente</SmallHeadline>
          </Label>
          <ModalInput placeholder="Nom" />
          <ModalInput placeholder="Téléphone" />
          <ModalInput placeholder="Mail" />
        </Line>
        <Line>
          <Label>
            <SmallHeadline>Infos</SmallHeadline>
          </Label>
          <ModalInput
            placeholder="Infos supplémentaires"
            style={{ width: "100%" }}
          />
        </Line>
        <SeparatorMedium style={{ margin: "20px 0" }} />
        <Line style={{ justifyContent: "space-between" }}>
          <SMS>
            <CheckboxChecked />
            &nbsp;Empêcher cette cliente de prendre RDV en ligne
          </SMS>
          <SMS>
            <CheckboxChecked />
            &nbsp;SMS de rappel
          </SMS>
          <ButtonsWrapper>
            <SecondaryButton
              style={{ marginRight: "40px" }}
              onClick={onDismiss}
              whileTap={{ scale: 0.9 }}
            >
              Retour
            </SecondaryButton>
            <PrimaryButton>Créer</PrimaryButton>
          </ButtonsWrapper>
        </Line>
      </CardModal>
    </Modal>
  );
}
