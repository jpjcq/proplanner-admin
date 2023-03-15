import { ReactNode, useMemo } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { lightTheme, Theme } from "./colors";
import { opacify } from "./utils";

const darkMode = false;
const darkTheme = lightTheme;

export const BREAKPOINTS = {
  xs: 396,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  xxxl: 1920,
};

function getTheme(darkMode: boolean) {
  return {
    darkMode,
    ...(darkMode ? darkTheme : lightTheme),
  };
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const themeObject = useMemo(() => getTheme(darkMode), [darkMode]);
  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

export const ThemedGlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:focus {
    outline: none;
  }

  // DayPicker's styling
  // Global
  .rdp{
    color: ${({ theme }) => theme.colors.policeDark};
    font-weight: 600;
  }
  // Month and chevrons
  .rdp-caption_label, .rdp-nav_button {
    color: ${({ theme }) => theme.colors.policeBlack};
    font-weight: 700;
  }
  // Days' names
  .rdp-head_cell{
    color: ${({ theme }) => theme.colors.policeMedium};
    font-weight: 400;
  }

  .rdp-day_selected {
    border: 1px solid ${({ theme }) => theme.colors.borderMedium};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.policeDark};
  }

  .rdp tr:has(.rdp-day_selected) td:has(button) {
    background-color: ${({ theme }) => opacify(10, theme.colors.validation.blue)};
    color: ${({ theme }) => theme.colors.policeDark};
    &:first-child{
      border-radius: 20px 0 0 20px;
    }
    &:last-child{
      border-radius: 0 20px 20px 0;
    }
  }
  // Week of the day selected
  .rdp tr:has(.rdp-button:hover:not([disabled]):not(.rdp-day_selected)) td:has(button):not(.rdp tr:has(.rdp-day_selected) td:has(button)) {
    background-color: ${({ theme }) => theme.colors.validation.blue};
    color: ${({ theme }) => theme.colors.white};
    &:first-child{
      border-radius: 20px 0 0 20px;
    }
    &:last-child{
      border-radius: 0 20px 20px 0;
    }
  }
  // Day selected
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected){
    color: ${({ theme }) => theme.colors.policeBlack};
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({ theme }) => opacify(50, theme.colors.validation.blue)};
  }
  // Correction for automatically focused chevron
  .rdp .rdp-button:focus-visible:not([disabled]){
    background-color: ${({ theme }) => theme.colors.background};
    outline: none;
    border: none;
  }
`;
