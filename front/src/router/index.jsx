import {lazy} from 'react'

import { useRoutes ,Navigate} from "react-router-dom";
import MainLayout from "../layouts/Main";


import Loadable from '../components/Loadable';



const Calendar = Loadable(lazy(() => import('../views/calendar/Main')));

const DashboardOverview = Loadable(lazy(() => import('../views/dashboard/Main')));

const AdminUsers = Loadable(lazy(() => import('../views/AdminUsers/Main')));
const Users = Loadable(lazy(() => import('../views/Users/Main')));
const FormGroups = Loadable(lazy(() => import('../views/formGroups/Main')));

const Login = Loadable(lazy(() => import('../views/Login/Main')));
const Register = Loadable(lazy(() => import('../views/Register/Main')));
const ErrorPage = Loadable(lazy(() => import('../views/ErrorPage/Main')));
//import Calendar from "../views/calendar/Main";

function Router() {
  let auth = localStorage.loggedIn ? true : false;
  const routes = [
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
          element: <AdminUsers />,
        },

        {
          path: "/form_groups",
          element: <FormGroups />,
        },
        {
          path: "/forms/:type",
          element: <Users />,
        },

        {
          path: "/calendar",
          element: <Calendar />,
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
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
