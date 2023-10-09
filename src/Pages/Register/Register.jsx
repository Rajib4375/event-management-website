import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");
    

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email, password);
        setError('')
        
        

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            swal("Good job!", "You Register Successfull!", "success");
           

        })
        .catch(error =>{
            console.log(error);
            swal("Error!", "Try Again", "Error")

        });

        // password validation
        if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
          setError('Minimum Six characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        }
        
          
       };

    return (
        <div>
            <h2 className="text-3xl my-5 font-bold text-center">Register your account</h2>

            {
              error && <p className="text-center text-red-400">{error}</p>
            }
            

            
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already Have An Account ? <Link className="text-blue-600 font-bold" to="/login">LogIn</Link></p>
        </div>
    );
};

export default Register;