import React from "react";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin=(event)=>{
        event.preventDefault();
    }
  return (
    <div className="hero mb-10 ">
      <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center">
       
      <div className="text-center lg:text-left">
          
          <img className="w-3/4" srcSet="" src={login} alt="" srcset="" />
        </div>


        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-4xl font-bold">Login</h2>
            <div className="form-control">
                
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="p-3 rounded-md bg-orange-600 text-white font-bold cursor-pointer " type="submit" value="Login" />
             
            </div>

            
          </form>
          <p className="mb-5">New to Car Doctor ? <Link className=" text-orange-600" to={'/signup'}>SignUp</Link> </p>
        </div>

        
      </div>
    </div>
  );
};

export default Login;
