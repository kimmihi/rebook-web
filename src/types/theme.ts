export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "error"
  | "success"
  | "gray";

export type ColorValue = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type DeviceType = "WEB" | "TABLET" | "PHONE";
