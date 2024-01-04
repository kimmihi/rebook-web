import type { DeviceType } from "types/theme";

import { useState, useEffect } from "react";

import { BREAKPOINT } from "configs/breakpoint";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>("DESKTOP");

  useEffect(() => {
    const root = document.querySelector(".App");
    if (!root) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      const { borderBoxSize } = entry;
      const { inlineSize } = borderBoxSize[0];

      if (inlineSize >= BREAKPOINT.DESKTOP) {
        setDeviceType("DESKTOP");
      } else if (
        inlineSize < BREAKPOINT.DESKTOP &&
        inlineSize >= BREAKPOINT.TABLET
      ) {
        setDeviceType("TABLET");
      } else {
        setDeviceType("PHONE");
      }
    });

    observer.observe(root);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { deviceType };
};

export default useDeviceType;
