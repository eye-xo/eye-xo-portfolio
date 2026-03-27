import { NavItem } from "@/interfaces/navInterfaces";

export const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  {
    name: "More",
    children: [
      {
        name: "Work",
        link: "/work",
        description: "Featured projects and experience",
      },
      {
        name: "Thinking",
        link: "/thinking",
        description: "How I approach building systems",
      },
      {
        name: "Systems",
        link: "/systems",
        description: "DevOps and architecture insights",
      },
      {
        name: "Contact",
        link: "/connect",
        description: "Let's build something together",
      },
    ],
  },
];
