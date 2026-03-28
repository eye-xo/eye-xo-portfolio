"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { NavBarProps } from "@/interfaces/navInterfaces";
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";

const MobileNav: React.FC<NavBarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const closeDrawer = () => {
    setIsOpen(false);
    setExpandedMenu(null);
  };

  const toggleAccordion = (name: string) => {
    setExpandedMenu((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Top bar: logo + hamburger */}
      <div className="container-wrapper flex items-center justify-between h-full">
        <Image src={logo} alt="Logo" height={28} />
        <button
          className="border-none p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <RiMenu3Line size={22} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <Image src={logo} alt="Logo" height={24} />
          <button
            className="border-none p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <RiCloseLine size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* Simple link */}
                {!item.children && item.link && (
                  <Link
                    href={item.link}
                    onClick={closeDrawer}
                    className="block px-3 py-3 rounded-lg font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Accordion item with children */}
                {item.children && (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-none text-left"
                      onClick={() => toggleAccordion(item.name)}
                    >
                      <span>{item.name}</span>
                      <RiArrowDownSLine
                        size={18}
                        className={`transition-transform duration-200 ${
                          expandedMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedMenu === item.name ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-gray-200 dark:border-gray-700 pl-3">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.link}
                              onClick={closeDrawer}
                              className="block px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                              <span className="block font-medium text-sm text-foreground">
                                {child.name}
                              </span>
                              <span className="block text-xs text-gray-500 mt-0.5">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full bg-(--btn-bg-secondary) text-white border-none justify-center">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
