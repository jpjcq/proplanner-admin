import { Text, TextProps } from "rebass";
import styled from "styled-components";

const TextWrapper = styled(Text).withConfig({
  shouldForwardProp: prop => prop !== "color",
})<{ color: string }>`
  color: ${({ color, theme }) => theme.colors[color]};
`;

export function SmallCaption(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={700}
      fontSize={10}
      color={"policeMedium"}
      {...props}
    />
  );
}

export function BigCaption(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={700}
      fontSize={12}
      color={"policeMedium"}
      {...props}
    />
  );
}

export function SmallSubHeader(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={700}
      fontSize={14}
      color={"policeMedium"}
      {...props}
    />
  );
}