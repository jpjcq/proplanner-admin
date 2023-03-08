const commonTheme = {
  white: "#FFFFFF",
  black: "#000000",
  cardGreen: "#63C951",
  cardBlue: "#61BCF9",
  cardOrange: "#ED7043",
  cardBrown: "#C0783B",
  cardPurple: "#7E38F6",
  cardYellow: "#F7CD55",
  validation: {
    blue: "#3E60F6",
  },
  boxShadow:
    "0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)",
};

export const lightTheme = {
  colors: {
    ...commonTheme,
    background: "#F7F8FA",
    borderLight: "#EDEFF2",
    borderMedium: "#D9DBDE",
    borderDark: "#979A9D",
    policeLight: "#9EA8C2",
    policeMedium: "#9EA8C2",
    policeDark: "#505E7D",
    policeBlack: "#333C50",
    accent: "linear-gradient(115deg, #F16FFF 0%, #4DE9B7 100%)",
  },
};

export type Theme = typeof lightTheme;