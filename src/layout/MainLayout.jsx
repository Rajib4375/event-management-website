import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
           <Navbar></Navbar>
           <div className="py-7">
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;