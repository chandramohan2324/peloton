import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "EPM",
        path: "/epm",
        newTab: false,
      },
      {
        id: 42,
        title: "ERP",
        path: "/features",
        newTab: false,
      },
    ],
  },
  {
    id: 49,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
