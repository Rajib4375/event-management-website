import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";

import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Event from "../Pages/Event/Event";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";



const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/event.json')
            },
            
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/register",
                element:<Register></Register>

            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path:"/events/:id",
                element:<PrivateRoute><Event></Event></PrivateRoute>,
                loader:()=>fetch('/event.json')
            }
        ]
    }
])

export default myCreatedRoute;