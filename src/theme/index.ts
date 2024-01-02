import type { Color, ColorValue } from "types/theme";

export const colors: { [key in Color]: ColorValue } = {
  primary: {
    light: "#424d57",
    main: "#242a30",
    dark: "#0b0d0f",
    contrastText: "#f0f2f4",
  },
  secondary: {
    light: "#33abb8",
    main: "#0097a7",
    dark: "#006974",
    contrastText: "#f0f2f4",
  },
  success: {
    light: "#5fa463",
    main: "#388e3c",
    dark: "#27632a",
    contrastText: "#f0f2f4",
  },
  info: {
    light: "#4b9fea",
    main: "#1e88e5",
    dark: "#155fa0",
    contrastText: "#f0f2f4",
  },
  warning: {
    light: "#ffb851",
    main: "#ffa726",
    dark: "#b2741a",
    contrastText: "#f0f2f4",
  },
  error: {
    light: "#fa6b87",
    main: "#f7224c",
    dark: "#c5072d",
    contrastText: "#f0f2f4",
  },
  gray: {
    light: "#e2e6e9",
    main: "#c5cdd3",
    dark: "#a8b4bd",
    contrastText: "#424d57",
  },
};
