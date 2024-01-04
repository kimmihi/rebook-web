import type { DeviceType } from "types/theme";

export const BREAKPOINT: { [key in DeviceType]: number } = {
  WEB: 1200,
  TABLET: 768,
  PHONE: 0,
};
