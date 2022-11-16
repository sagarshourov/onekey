import { atom } from "recoil";

let sideMenu = atom({
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
        pathname: "/student_info",
      },
      {
        icon: "Calendar",
        pathname: "/calender",
        title: "Calender",
      },
      {
        icon: "ListChecks",
        pathname: "/tasks",
        title: "To Do List",
      },
      {
        icon: "Files",
        pathname: "/my_doc",
        title: "My Documents",
      },
      {
        icon: "Bell",
        pathname: "/notifications",
        title: "Notifications",
      },
    ],
  },
});

let UsersideMenu = atom({
  key: "userSideMenu",
  default: {
    menu: [
      "START MENU",
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/",
      },

      {
        icon: "Upload",
        title: "Uploaded Docs",
        subMenu: [
          {
            icon: "",
            pathname: "/files",
            title: "All",
          },
          {
            icon: "",
            pathname: "/add_files",
            title: "Add New",
          },
        ],
      },
      {
        icon: "CheckSquare",
        pathname: "/app_status",
        title: "App Status",
      },

      {
        icon: "Calendar",
        pathname: "/calender",
        title: "Calender",
      },
      {
        icon: "Files",
        pathname: "/my_doc",
        title: "Dwonload Docs",
      },
      {
        icon: "ListChecks",
        pathname: "/tasks",
        title: "To Do List",
      },
    ],
  },
});

export { sideMenu, UsersideMenu };
