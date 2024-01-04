import type { ReactNode } from "react";

import useDeviceType from "hooks/useDeviceType";

import DesktopDashboardLayout from "./DesktopDashboardLayout";
import MobileDashboardLayout from "./MobileDashboardLayout";

interface Props {
  children?: ReactNode | ReactNode[];
}

const DashboardLayout = ({ children }: Props) => {
  const { deviceType } = useDeviceType();

  return (
    <>
      {deviceType === "DESKTOP" ? (
        <DesktopDashboardLayout>{children}</DesktopDashboardLayout>
      ) : (
        <MobileDashboardLayout>{children}</MobileDashboardLayout>
      )}
    </>
  );
};

export default DashboardLayout;
