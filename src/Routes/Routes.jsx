import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/AdminPages/AdminHome";
import UserHome from "../Pages/UserPages/UserHome";
import CreateTask from "../Pages/UserPages/CreateTask";
import ToDo from "../Pages/UserPages/ToDo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path: '/dashboard/adminHome',
                        element: <AdminHome></AdminHome>
                    },
                    {
                        path: '/dashboard/userHome',
                        element: <UserHome></UserHome>
                    },
                    {
                        path: '/dashboard/createTask',
                        element: <CreateTask></CreateTask>
                    },
                    {
                        path: '/dashboard/toDo',
                        element: <ToDo></ToDo>
                    }
                ]
            }
            
        ],
        
       
        
    }
])