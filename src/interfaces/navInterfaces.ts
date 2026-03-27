export interface SubItem {
  name: string;
  link: string;
  description: string;
}

export interface NavItem {
  name: string;
  link?: string;
  children?: SubItem[];
}

export interface NavBarProps {
  navItems: NavItem[];
}

export interface SubMenuProps {
  subItems: SubItem[];
}
