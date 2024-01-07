export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "error"
  | "success";

export interface GrayColor {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
}

export type ColorValue = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type DeviceType = "DESKTOP" | "TABLET" | "PHONE";
