import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.config";
import Loading from "../Sheared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate=useNavigate(auth);
  let setError;
	const { register, handleSubmit, formState: { errors } } = useForm();
  if(loading){
    return <Loading></Loading>
  }
  if(error){
     setError =error.message;
  }
  if(user){
    navigate('/')
  }
	const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  const handelGoogle=()=>{
    signInWithGoogle()
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
			  <div className="form-control w-full max-w-xs">
			  <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
			  {...register("email", { required:{value:true, message: 'Email is Required'} ,
				pattern: {
					value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					message: 'Please input a valid email' 
				  }})}
            />
            <label className="label">
			{errors.email?.type === 'required' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
			{errors.email?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
            </label>
			  </div>
            <div>
			<label className="label">
              <span className="label-text">Password</span>
            </label>
			</div>
            
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
			  {...register("password", { required:{value:true, message: 'Password is Required'},
				pattern: {
					value:/^(?=.*\d).{6,20}$/,
					message: 'Must be at least 6 characters' 
			}})}
            />
            <label className="label">
			{errors.password?.type === 'required' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
			{errors.password?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
            </label>
            <p><small className="label-text text-red-500">{setError}</small></p>
			<input type="submit" className="btn w-full max-w-xs text-white" value="Login"/>
          </form>
		  <p><small>New to Doctors Portal? <Link className="text-primary" to="/signup">Create New Account</Link></small></p>
		  <div className="divider">OR</div>
		  <button onClick={handelGoogle} className="btn btn-outline">Continue With Google</button>

        </div>
      </div>
    </div>
  );
};

export default Login;
