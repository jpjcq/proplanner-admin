import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { Overlay, Content } from "@radix-ui/react-dialog";

export const StyledOverlay = styled(Overlay)`
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: #080b117e;
`;

export const StyledContent = styled(Content)`
  position: fixed;
  z-index: 9999;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;

  &:focus {
    outline: none;
  }
`;

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onDismiss: () => void;
  style?: CSSProperties;
}
