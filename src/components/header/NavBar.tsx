import { NavBarProps } from "@/interfaces/navInterfaces";
import React from "react";
import DeskTopNav from "./DeskTopNav";
import MobileNav from "./MobileNav";

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <header>
      <nav className="container-fluid h-14 md:h-16 border-b border-slate-200 dark:border-gray-800">
        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:block h-full">
          <DeskTopNav navItems={navItems} />
        </div>
        {/* Mobile nav — hidden on md+ */}
        <div className="md:hidden h-full">
          <MobileNav navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
