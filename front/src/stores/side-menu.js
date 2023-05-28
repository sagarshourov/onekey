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
      // {
      //   icon: "Clipboard",
      //   pathname: "/board",
      //   title: "Task Board",
      // },

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
          {
            icon: "Trash",
            pathname: "/trash",
            title: "Trash",
          },
        ],
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
        title: "Student Info",
        pathname: "/student_info",
      },
      {
        icon: "Calendar",
        pathname: "/calender",
        title: "Calender",
      },
      // {
      //   icon: "ListChecks",
      //   pathname: "/tasks",
      //   title: "To Do List",
      // },
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
        title: "Profile",
        pathname: "/",
      },
      {
        icon: "FileText",
        title: "Client Form",
        pathname: "/forms/1",
      },
      {
        icon: "Clipboard",
        title: "DS-160 For F-1 Student",
        pathname: "/forms/2",
      },

      {
        icon: "Book",
        title: "Forms for Dependents",
        subMenu: [
          {
            icon: "",
            pathname: "/forms/3",
            title: "DS-160 For Spouse",
          },
          {
            icon: "",
            pathname: "/forms/4",
            title: "DS-160 For Child one",
          },
          {
            icon: "",
            pathname: "/forms/5",
            title: "DS-160 For Child Two",
          },
          {
            icon: "",
            pathname: "/forms/23",
            title: "DS-160 For Child Three",
          },
        ],
      },
      {
        icon: "Book",
        title: "Other Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/forms/21",
            title: "Reccomonadation Letter",
          },
          {
            icon: "",
            pathname: "/forms/22",
            title: "SOP ",
          },
        ],
      },
      {
        icon: "Layout",
        title: "Resume Builder",
        pathname: "/forms/6",
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
        title: "Download Docs",
      },
      // {
      //   icon: "ListChecks",
      //   pathname: "/tasks",
      //   title: "To Do List",
      // },
    ],
  },
});

let JrAdmin = atom({
  key: "JrAdminMenu",
  default: {
    menu: [
      "START MENU",
      {
        icon: "Home",
        title: "Profile",
        pathname: "/",
      },

      {
        icon: "Users",
        title: "Users",
        pathname: "/user_list",
      },

      {
        icon: "LayoutList",
        title: "Resume Builder",
        pathname: "/forms/view/6",
      },
      {
        icon: "LayoutList",
        title: "SOP",
        pathname: "/forms/view/22",
      },
      {
        icon: "Trash",
        pathname: "/trash",
        title: "Trash",
      },
    ],
  },
});

export { sideMenu, UsersideMenu, JrAdmin };
