import { SubMenuProps } from "@/interfaces/navInterfaces";
import Link from "next/link";
import React from "react";

const SubMenu: React.FC<SubMenuProps> = ({ subItems }) => {
  return (
    <div className="container-wrapper hidden shadow-xl md:flex flex-wrap justify-between p-4 bg-background rounded-b-md w-[90vw]">
      {subItems.map((item, index) => (
        <Link className="min-w-56 hover:border-b p-2 rounded-md" href={item.link} key={index}>
          <h6 className="font-vt323 text-xl">{item.name}</h6>
          <p className="text-xs">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
