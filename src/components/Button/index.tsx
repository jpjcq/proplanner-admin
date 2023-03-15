import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "rebass/styled-components";
import styled from "styled-components";

const AnimatedRebassButton = motion(Button);

export const SecondaryButton = styled(AnimatedRebassButton)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.policeDark};
  background-color: transparent;
`;

const PrimaryButtonBackground = styled(AnimatedRebassButton)`
  font-size: 20px;
  font-weight: 900;
  padding: 14px 30px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
`;

const PrimaryButtonText = styled.span`
  background-image: ${({ theme }) => theme.colors.accent};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <PrimaryButtonBackground whileTap={{scale: 0.9}}>
      <PrimaryButtonText>Total: {children}€</PrimaryButtonText>
    </PrimaryButtonBackground>
  );
}
