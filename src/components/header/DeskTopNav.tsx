"use client";
import React from "react";
import Link from "next/link";
import { NavBarProps } from "@/interfaces/navInterfaces";
import SubMenu from "./SubMenu";
import Image from "next/image";
import logo from '@/assets/logo.svg'

const DeskTopNav: React.FC<NavBarProps> = ({ navItems }) => {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  return (
    <div className="container-wrapper relative flex items-center justify-between h-full">
      <div className="flex flex-row gap-16 items-center">
        <Image src={logo} alt="" height={30}/>
        <ul className="flex flex-row gap-10 items-center">
          {navItems.map((item, index) => (
            <li
              className="text-sm"
              key={index}
              onMouseEnter={() => {
                if (item.children) setActiveMenu(item.name);
              }}
              onMouseLeave={() => {
                if (!item.children) setActiveMenu(null);
              }}
            >
              {!item?.children && item.link && <Link href={item.link}>{item.name}</Link>}
              {item.children && <span className="cursor-pointer">{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-(--btn-bg-secondary) text-white border-none">Get in touch</button>

      <div
        className={`absolute left-0 top-full w-full transition-all duration-200 ease-out ${
          activeMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navItems.map((item) => (item.name === activeMenu && item.children ? <SubMenu key={item.name} subItems={item.children} /> : null))}
      </div>
    </div>
  );
};

export default DeskTopNav;
