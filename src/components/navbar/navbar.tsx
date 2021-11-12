import * as React from "react";

import { useBreakpointValue } from "@chakra-ui/react";

import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <NavbarMobile />;
  }

  return <NavbarDesktop />;
};
