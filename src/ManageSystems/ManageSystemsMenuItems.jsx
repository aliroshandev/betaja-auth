import React from "react";
import { TiLightbulb } from "react-icons/ti";

const MANAGE_SYSTEM_MENU_ITEMS = [
  {
    name: "مدیریت",
    comp: "manager",
    icon: <TiLightbulb />,
    disabled: false,
    submenus: [
      {
        name: "مدیریت منابع",
        link: "menu",
        icon: <TiLightbulb />,
      },
      // {
      //   name: "نوع منابع (حذف)",
      //   link: "resources-type",
      //   icon: <TiLightbulb />,
      // },
      {
        name: "تخصیص مجوز به منابع",
        link: "resource-permissions",
        icon: <TiLightbulb />,
      },
      {
        name: "تخصیص نقش به مجوز",
        link: "access",
        icon: <TiLightbulb />,
      },
      // {
      //   name: "نمایش دسترسی ها",
      //   link: "show-access",
      //   icon: <TiLightbulb />,
      // },
      // {
      //   name: "نقش ها",
      //   link: "roles",
      //   icon: <TiLightbulb />,
      // },
      {
        name: "مدیریت نقش ها",
        link: "roles-management",
        icon: <TiLightbulb />,
      },
      {
        name: "مجوز ها ",
        link: "permissions",
        icon: <TiLightbulb />,
      },
      {
        name: "کاربران",
        link: "users",
        icon: <TiLightbulb />,
      },
    ],
  },
];

export default MANAGE_SYSTEM_MENU_ITEMS;
