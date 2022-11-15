import {lazy} from 'react'

import { useRoutes ,Navigate} from "react-router-dom";
import MainLayout from "../layouts/Main";


import Loadable from '../components/Loadable';



const Calendar = Loadable(lazy(() => import('../views/calendar/Main')));

const DashboardOverview = Loadable(lazy(() => import('../views/dashboard/Main')));

const AdminUsers = Loadable(lazy(() => import('../views/AdminUsers/Main')));
const AllUsers = Loadable(lazy(() => import('../views/Users/Main')));
const Users = Loadable(lazy(() => import('../views/Users/Main')));
const FormGroups = Loadable(lazy(() => import('../views/formGroups/Main')));


const ToDoList = Loadable(lazy(() => import('../views/ToDoList/Main')));

const Login = Loadable(lazy(() => import('../views/Login/Main')));
const Register = Loadable(lazy(() => import('../views/Register/Main')));
const ErrorPage = Loadable(lazy(() => import('../views/ErrorPage/Main')));

const Notification = Loadable(lazy(() => import('../views/Notification/Main')));

const MyDocuments = Loadable(lazy(() => import('../views/MyDocuments/Main')));

const UserAppStatus = Loadable(lazy(() => import('../views/UserAppStatus/Main')));

const UploadedDocs = Loadable(lazy(() => import('../views/UploadedDocs/Main')));






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
          path: "/admin_users",
          element: <AdminUsers />,
        },

        {
          path: "/user_list",
          element: <AllUsers />,
        },
        {
          path: "/form_groups",
          element: <FormGroups />,
        },

        {
          path: "/app_status",
          element: <UserAppStatus />,
        },
        {
          path: "/files",
          element: <UploadedDocs />,
        },
        {
          path: "/tasks",
          element: <ToDoList />,
        },

        


        {
          path: "/forms/:type",
          element: <Users />,
        },

        {
          path: "/calender",
          element: <Calendar />,
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
          element: <DashboardOverview />,
        },
        {
          path: "/admin_users",
          element: <AdminUsers />,
        },

        {
          path: "/user_list",
          element: <AllUsers />,
        },
        {
          path: "/form_groups",
          element: <FormGroups />,
        },

        {
          path: "/app_status",
          element: <UserAppStatus />,
        },
        {
          path: "/files",
          element: <UploadedDocs />,
        },
        {
          path: "/tasks",
          element: <ToDoList />,
        },

        


        {
          path: "/forms/:type",
          element: <Users />,
        },

        {
          path: "/calender",
          element: <Calendar />,
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

  if(localStorage.isAdmin){
    return useRoutes(adminRoutes);
  }else{
    return useRoutes(userRoutes);
  }

  
}

export default Router;
