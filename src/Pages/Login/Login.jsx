/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

   const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password)
    signIn(email, password)
    .then(result =>{
        console.log(result.user)
        swal("Good job!", "You Login Successfull!", "success");
    
        // navigate after login 
        navigate(location?.state ? location.state : "/");



    })
    .catch(error =>{
        console.log(error);
        swal("Error!", "please correct email & password", "Error"); 
    })
   }

    return (
        <div>
            <h2 className="text-3xl my-5 font-bold text-center">Login your account</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not Have An Account ? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;