import {lazy} from 'react'

import { useRoutes ,Navigate} from "react-router-dom";
import MainLayout from "../layouts/Main";


import Loadable from '../components/Loadable';



const Calendar = Loadable(lazy(() => import('../views/calendar/Main')));

const DashboardOverview = Loadable(lazy(() => import('../views/dashboard/Main')));

const UserDashboardOverview = Loadable(lazy(() => import('../views/dashboard/UserMain')));

const AdminUsers = Loadable(lazy(() => import('../views/AdminUsers/Main')));
const AllUsers = Loadable(lazy(() => import('../views/Users/Main')));
const Users = Loadable(lazy(() => import('../views/Users/Main')));



const ToDoList = Loadable(lazy(() => import('../views/ToDoList/Main')));

const Login = Loadable(lazy(() => import('../views/Login/Main')));
const Register = Loadable(lazy(() => import('../views/Register/Main')));
const ErrorPage = Loadable(lazy(() => import('../views/ErrorPage/Main')));

const Notification = Loadable(lazy(() => import('../views/Notification/Main')));

const MyDocuments = Loadable(lazy(() => import('../views/MyDocuments/Main')));

const UserAppStatus = Loadable(lazy(() => import('../views/UserAppStatus/Main')));

const UploadedDocs = Loadable(lazy(() => import('../views/UploadedDocs/Main')));
const AddFiles = Loadable(lazy(() => import('../views/UploadedDocs/AddFiles')));

const StudentInfo = Loadable(lazy(() => import('../views/StudentInfo/Main')));
const AllForms = Loadable(lazy(() => import('../views/Forms/Main')));
const AddForm = Loadable(lazy(() => import('../views/Forms/Addfrom')));
const EditForm = Loadable(lazy(() => import('../views/Forms/EditForm')));

const UserFrom = Loadable(lazy(() => import('../views/UserFroms/Main')));

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
          path: "/app_status",
          element: <UserAppStatus />,
        },
        {
          path: "/student_info",
          element: <StudentInfo />,
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
          path: "/forms/add",
          element: <AddForm />,
        },
        {
          path: "/forms/edit/:id",
          element: <EditForm />,
        },
        {
          path: "/forms/all",
          element: <AllForms />,
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
          element: <UserDashboardOverview />,
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
          path: "/files",
          element: <UploadedDocs />,
        },
        {
          path: "/add_files",
          element: <AddFiles />,
        },
        {
          path: "/tasks",
          element: <ToDoList />,
        },


        {
          path: "/forms/:id",
          element: <UserFrom />,
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
