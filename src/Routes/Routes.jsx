import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";

import CreateTask from "../Pages/UserPages/CreateTask";
import ToDo from "../Pages/UserPages/ToDo";
import Update from "../Pages/UserPages/Update";
import PrivateRoutes from "./PrivateRoutes";

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
                        path: '/dashboard/createTask',
                        element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>
                    },
                    {
                        path: '/dashboard/toDo',
                        element: <PrivateRoutes><ToDo></ToDo></PrivateRoutes>
                    },
                    {
                        path: '/dashboard/update/:id',
                        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                        loader: ({params}) => fetch(`https://job-task-server-alpha-five.vercel.app/todo/${params.id}`)
                    },
                ]
            }
            
        ],
        
       
        
    }
])