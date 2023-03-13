import { CSSProperties, ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { Theme } from "../../theme/colors";

const Button = styled(motion.button)<{ accent?: boolean }>`
  height: 52px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 13px;
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
  cursor: pointer;
`;

const StyledBigCaption = styled.span<{ accent?: boolean }>`
  font-weight: 700;
  ${({ theme, accent }) => {
    let css = "";
    if (accent) {
      css += `
        font-size: 14px;
        background-image: ${theme.colors.accent};
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      `;
      return css;
    } else {
      css += `
        font-size: 12px;
        color: ${theme.colors.policeMedium};
      `;
      return css;
    }
  }}
`;

interface NavButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  accent?: boolean;
  layout?: boolean | "position" | "size" | "preserve-aspect" | undefined;
  transition?: {};
}

export default function NavButton({
  children,
  onClick,
  style,
  accent,
  layout,
  transition,
}: NavButtonProps) {
  const theme = useTheme() as Theme;
  return (
    <Button
      onClick={onClick}
      whileTap={{ boxShadow: theme.boxShadowMedium.inset }}
      style={style}
      accent={accent as boolean}
      layout={layout}
      transition={transition}
    >
      <StyledBigCaption accent={accent as boolean}>{children}</StyledBigCaption>
    </Button>
  );
}
