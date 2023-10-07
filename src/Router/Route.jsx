import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";



const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/event.json')
            },
            {
                path: "/course details",
                element:<CourseDetails></CourseDetails>
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path: "/login",
                element:<Login></Login>
            }
        ]
    }
])

export default myCreatedRoute;