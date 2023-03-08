import { ReactNode, useMemo } from "react";
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { lightTheme, Theme } from "./colors";

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

export const ThemedGlobalStyle = createGlobalStyle<{theme: Theme}>`
  html {
    background-color: ${({theme}) => theme.colors.background};
  }
  &:focus {
    outline: none;
  }
`;