import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex  justify-between items-center py-6 shadow-lg px-5">
                <Logo></Logo>
                <ul className="flex gap-6">
                    <li>
                    <NavLink
                      to="/"
                       className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }
                      >
                      Home
                       </NavLink>
                     </li>

                     <li>
                    <NavLink
                      to="/course details"
                       className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }
                      >
                      Course Details
                       </NavLink>
                     </li>

                     <li>
                    <NavLink
                      to="/about"
                       className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }
                      >
                      About
                       </NavLink>
                     </li>

                     <li>
                    <NavLink
                      to="/login"
                       className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }
                      >
                      Login
                       </NavLink>
                     </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

