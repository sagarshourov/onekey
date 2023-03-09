import { lazy } from "react";

import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/Main";

import Loadable from "../components/Loadable";

const StatusView = Loadable(
  lazy(() => import("../views/UserAppStatus/StatusView"))
);

const AdminCalender = Loadable(
  lazy(() => import("../views/calendar/AdminCalender"))
);

const UserCalender = Loadable(
  lazy(() => import("../views/calendar/UserCalender"))
);

const DashboardOverview = Loadable(
  lazy(() => import("../views/dashboard/Main"))
);

const Profile = Loadable(lazy(() => import("../views/dashboard/Profile")));

const UserDashboardOverview = Loadable(
  lazy(() => import("../views/dashboard/UserMain"))
);

const AdminUsers = Loadable(lazy(() => import("../views/AdminUsers/Main")));
const AdminUsersView = Loadable(
  lazy(() => import("../views/AdminUsers/UsersView"))
);

const AllUsers = Loadable(lazy(() => import("../views/Users/Main")));
const Users = Loadable(lazy(() => import("../views/Users/Main")));

const ToDoList = Loadable(lazy(() => import("../views/ToDoList/Main")));

const Login = Loadable(lazy(() => import("../views/Login/Main")));
const Register = Loadable(lazy(() => import("../views/Register/Main")));

const Forgot = Loadable(lazy(() => import("../views/Login/Forgot")));

const ResetPass = Loadable(lazy(() => import("../views/Login/ResetPass")));

const ErrorPage = Loadable(lazy(() => import("../views/ErrorPage/Main")));

const Notification = Loadable(lazy(() => import("../views/Notification/Main")));

const MyDocuments = Loadable(lazy(() => import("../views/MyDocuments/Main")));

const UserMyDocuments = Loadable(
  lazy(() => import("../views/MyDocuments/UserMain"))
);

const UserAppStatus = Loadable(
  lazy(() => import("../views/UserAppStatus/Main"))
);

const UploadedDocs = Loadable(lazy(() => import("../views/UploadedDocs/Main")));
const AdminUploadedDocs = Loadable(
  lazy(() => import("../views/UploadedDocs/AdminMain"))
);
const AddFiles = Loadable(lazy(() => import("../views/UploadedDocs/AddFiles")));

const AdminAddFiles = Loadable(
  lazy(() => import("../views/MyDocuments/AddFiles"))
);

const ViewAttachment = Loadable(
  lazy(() => import("../views/UploadedDocs/ViewAttachment"))
);

const StudentInfo = Loadable(lazy(() => import("../views/StudentInfo/Main")));
const AllForms = Loadable(lazy(() => import("../views/Forms/Main")));
const AddForm = Loadable(lazy(() => import("../views/Forms/Addfrom")));
const EditForm = Loadable(lazy(() => import("../views/Forms/EditForm")));
const ViewForm = Loadable(lazy(() => import("../views/Forms/View")));

const UserFrom = Loadable(lazy(() => import("../views/UserFroms/Main")));

const ViewDataForm = Loadable(lazy(() => import("../views/Forms/ViewData")));

const AdminStatusView = Loadable(
  lazy(() => import("../views/UserAppStatus/AdminStatusView"))
);

//import Calendar from "../views/calendar/Main";

function Router() {
  let auth = localStorage.loggedIn ? true : false;
  const adminRoutes = [
    {
      path: "/",
      element: auth ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <DashboardOverview />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },

        {
          path: "/admin_users",
          element: <AdminUsers />,
        },
        {
          path: "/admin_users/view/:id",
          element: <AdminUsersView />,
        },
        {
          path: "/user_list",
          element: <AllUsers />,
        },

        {
          path: "/app_status",
          element: <UserAppStatus />,
        },
        {
          path: "/app_status/:id",
          element: <AdminStatusView />,
        },
        {
          path: "/student_info",
          element: <StudentInfo />,
        },
        {
          path: "/files",
          element: <AdminUploadedDocs />,
        },
        {
          path: "/add_files",
          element: <AdminAddFiles />,
        },
        {
          path: "/view_attchment/:id",
          element: <ViewAttachment />,
        },
        // {
        //   path: "/tasks",
        //   element: <ToDoList />,
        // },

        {
          path: "/forms/add",
          element: <AddForm />,
        },
        {
          path: "/forms/edit/:id",
          element: <EditForm />,
        },
        {
          path: "/forms/view/:id",
          element: <ViewForm />,
        },
        {
          path: "/forms/viewdata/:id",
          element: <ViewDataForm />,
        },
        {
          path: "/forms/all",
          element: <AllForms />,
        },

        {
          path: "/calender",
          element: <AdminCalender />,
        },

        {
          path: "/my_doc",
          element: <MyDocuments />,
        },

        {
          path: "/notifications",
          element: <Notification />,
        },
      ],
    },

    {
      path: "/login",
      element: auth ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: auth ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  const jrAdminRoutes = [
    {
      path: "/",
      element: auth ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <DashboardOverview />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },

        {
          path: "/admin_users",
          element: <AdminUsers />,
        },
        {
          path: "/admin_users/view/:id",
          element: <AdminUsersView />,
        },
        {
          path: "/user_list",
          element: <AllUsers />,
        },

        {
          path: "/app_status",
          element: <UserAppStatus />,
        },
        {
          path: "/app_status/:id",
          element: <AdminStatusView />,
        },
        {
          path: "/student_info",
          element: <StudentInfo />,
        },
        {
          path: "/files",
          element: <AdminUploadedDocs />,
        },
        {
          path: "/add_files",
          element: <AdminAddFiles />,
        },
        {
          path: "/view_attchment/:id",
          element: <ViewAttachment />,
        },
        // {
        //   path: "/tasks",
        //   element: <ToDoList />,
        // },

        {
          path: "/forms/add",
          element: <AddForm />,
        },
        {
          path: "/forms/edit/:id",
          element: <EditForm />,
        },
        {
          path: "/forms/view/:id",
          element: <ViewForm />,
        },
        {
          path: "/forms/viewdata/:id",
          element: <ViewDataForm />,
        },
        {
          path: "/forms/all",
          element: <AllForms />,
        },

        {
          path: "/calender",
          element: <AdminCalender />,
        },

        {
          path: "/my_doc",
          element: <MyDocuments />,
        },

        {
          path: "/notifications",
          element: <Notification />,
        },
      ],
    },

    {
      path: "/login",
      element: auth ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: auth ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  const userRoutes = [
    {
      path: "/",
      element: auth ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <UserDashboardOverview />,
        },

        {
          path: "/user_list",
          element: <AllUsers />,
        },

        {
          path: "/app_status",
          element: <StatusView />,
        },
        {
          path: "/files",
          element: <UploadedDocs />,
        },
        {
          path: "/add_files",
          element: <AddFiles />,
        },
        // {
        //   path: "/tasks",
        //   element: <ToDoList />,
        // },

        {
          path: "/forms/:id",
          element: <UserFrom />,
        },

        {
          path: "/calender",
          element: <UserCalender />,
        },

        {
          path: "/my_doc",
          element: <UserMyDocuments />,
        },

        {
          path: "/notifications",
          element: <Notification />,
        },
      ],
    },

    {
      path: "/login",
      element: auth ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: auth ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/forgot",
      element: auth ? <Navigate to="/" /> : <Forgot />,
    },
    {
      path: "/password/:token/:id",
      element: auth ? <Navigate to="/" /> : <ResetPass />,
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  if (parseInt(localStorage.isAdmin) === 1) {
    return useRoutes(adminRoutes);
  } else if (parseInt(localStorage.isAdmin) === 2) {
    return useRoutes(jrAdminRoutes);
  } else {
    return useRoutes(userRoutes);
  }
}

export default Router;
