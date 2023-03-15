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
      {...props}
    />
  );
}

export function BodyRegular(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={500}
      fontSize={16}
      color={"policeMedium"}
      {...props}
    />
  );
}

export function BigBody(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={700}
      fontSize={16}
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

export function MediumSubHeader(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={600}
      fontSize={20}
      color={"policeMedium"}
      {...props}
    />
  );
}

export function SmallHeadline(props: TextProps) {
  return (
    <TextWrapper
      fontWeight={700}
      fontSize={24}
      {...props}
    />
  );
}