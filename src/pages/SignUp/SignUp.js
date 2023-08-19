import React, { useContext } from "react";
import signup from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";



const SignUp = () => {
   const {createUser}=useContext(AuthContexts); 

  const handleSignUp = (event) => {
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then((result)=>{
        const user=result.user;
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
    form.reset();
  };
  return (
    <div className="hero mb-10 ">
      <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center">
        <div className="text-center lg:text-left">
          <img srcSet="" className="w-3/4" src={signup} alt="" srcset="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h2 className="text-4xl font-bold">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
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
                required
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="p-3 rounded-md bg-orange-600 text-white font-bold cursor-pointer "
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="mb-5">
            Already have an account ?{" "}
            <Link className=" text-orange-600" to={"/Login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
