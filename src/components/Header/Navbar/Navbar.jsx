import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
   
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()

  }

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
                      to="/register"
                       className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }
                      >
                      Register
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

                {
                  user ? <button onClick={handleSignOut} className="btn">Sign Out</button> :
                  <Link to="/login">
                <button className="btn">Login</button>
                </Link>

                }
                
            </nav>
        </div>
    );
};

export default Navbar;

