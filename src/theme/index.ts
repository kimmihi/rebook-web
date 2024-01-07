import type { Color, ColorValue, GrayColor } from "types/theme";

interface ColorMap extends Record<Color, ColorValue> {
  gray: GrayColor;
}

export const colors: ColorMap = {
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
    10: "#f0f2f4",
    20: "#e2e6e9",
    30: "#c5cdd3",
    40: "#b6c0c8",
    50: "#a8b4bd",
    60: "#99a7b2",
    70: "#7c8e9c",
    80: "#6e8291",
    90: "#637583",
    100: "#586874",
  },
};
