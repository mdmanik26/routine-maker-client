import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";

import CreateTask from "../Pages/UserPages/CreateTask";
import ToDo from "../Pages/UserPages/ToDo";
import Update from "../Pages/UserPages/Update";

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
                        element: <CreateTask></CreateTask>
                    },
                    {
                        path: '/dashboard/toDo',
                        element: <ToDo></ToDo>
                    },
                    {
                        path: '/dashboard/update/:id',
                        element: <Update></Update>,
                        loader: ({params}) => fetch(`http://localhost:5000/todo/${params.id}`)
                    },
                ]
            }
            
        ],
        
       
        
    }
])