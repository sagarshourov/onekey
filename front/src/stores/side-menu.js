import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      "START MENU",
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/",
      },

      {
        icon: "User",
        pathname: "/admin_users",
        title: "Admin Users",
      },
      {
        icon: "Users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pathname: "/user_list",
            title: "All",
          },
        ],
      },

      {
        icon: "LayoutGrid",
        pathname: "/form_groups",
        title: "Form Groups",
      },
      {
        icon: "LayoutList",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/forms/all",
            title: "All",
          },
          {
            icon: "",
            pathname: "/forms/add",
            title: "Add New",
          },
        ],
      },
      {
        icon: "Upload",
        pathname: "/files",
        title: "Uploaded Docs",
      },
      {
        icon: "CheckSquare",
        pathname: "/app_status",
        title: "Users App Status",
      },
      {
        icon: "Home",
        title: "Stduent Info",
        subMenu: [
          {
            icon: "",
            pathname: "/admin/forms/all",
            title: "All",
          },
          {
            icon: "",
            pathname: "/admin/forms/add",
            title: "Add New",
          },
        ],
      },
      {
        icon: "Calendar",
        pathname: "/calender",
        title: "Calender",
      },
      {
        icon: "ListChecks",
        pathname: "/to_do",
        title: "To Do List",
      },
      {
        icon: "Files",
        pathname: "/my_doc",
        title: "My Documents",
      },
      {
        icon: "Bell",
        pathname: "/notification",
        title: "Notifications",
      },
    ],
  },
});

export { sideMenu };
