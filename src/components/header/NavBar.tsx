"use server";

import { NavBarProps } from "@/interfaces/navInterfaces";
import React from "react";
import DeskTopNav from "./DeskTopNav";

const NavBar: React.FC<NavBarProps> = async ({ navItems }) => {
  return (
    <header>
      <nav className="container-fluid h-14 md:h-16 border-b border-slate-200">
        <DeskTopNav navItems={navItems} />
      </nav>
    </header>
  );
};

export default NavBar;
