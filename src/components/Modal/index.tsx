import { ReactNode, CSSProperties } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { BREAKPOINTS } from "../../theme";

const StyledDialogOverlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    position: fixed;
    z-index: 999;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #080b117e;
  }
`;

const StyledDialogContent = styled(DialogContent)<{ $isCart: boolean }>`
  &[data-reach-dialog-content] {
    background-color: ${({theme}) => theme.colors.background};
    border-radius: 20px;
    padding: 34px 40px;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    min-width: ${({ $isCart }) => $isCart && "300px"};
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    min-width: ${({ $isCart }) => $isCart && "500px"};
  }
`;

const AnimatedDialogOverlay = motion(StyledDialogOverlay);

const AnimatedDialogContent = motion(StyledDialogContent);

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onDismiss: () => void;
  style?: CSSProperties;
}

export default function Modal({
  children,
  isOpen,
  onDismiss,
  style,
}: ModalProps) {
  return (
    <AnimatePresence>
      <AnimatedDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <AnimatedDialogContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.07 }}
          exit={{ opacity: 0 }}
          style={style}
        >
          {children}
        </AnimatedDialogContent>
      </AnimatedDialogOverlay>
    </AnimatePresence>
  );
}
