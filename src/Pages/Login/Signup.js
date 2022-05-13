import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.config";
import Loading from "../Sheared/Loading";

const Signup = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useCreateUserWithEmailAndPassword(auth);

	const navigate=useNavigate(auth);
	let setError;
	  const { register, handleSubmit, formState: { errors } } = useForm();
	if(loading || gLoading){
	  return <Loading></Loading>
	}
	if(error || gError){
	   setError =gError.message;
	}
	if(user || gUser){
	  navigate('/')
	}
	  const onSubmit = data => {
	  createUserWithEmailAndPassword(data.email, data.password)
	};
	const handelGoogle=()=>{
	  signInWithGoogle()
	}
  
	return (
	  <div className="flex justify-center items-center h-screen">
		<div className="card w-96 shadow-xl">
		  <div className="card-body">
			<h2 className="text-center text-xl font-bold">Sign Up</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
				<div >
				<label className="label">
				<span className="label-text">Name</span>
			  </label>
			  <input
				type="text"
				placeholder="Your Name"
				className="input input-bordered w-full max-w-xs"
				{...register("name", { required:{value:true, message: 'Name is Required'} ,
				  pattern: {
					  value: /[a-zA-Z].{2,20}/,
					  message: 'Must be at least 3 characters and long' 
					}})}
			  />
			  <label className="label">
			  {errors.name?.type === 'required' &&  <small className="label-text text-red-500">{errors.name.message}</small>}
			  {errors.name?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.name.message}</small>}
			  </label>
				</div>
				<div>
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
					  message: 'Must be at least 6 characters long' 
			  }})}
			  />
			  <label className="label">
			  {errors.password?.type === 'required' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
			  {errors.password?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
			  </label>
			  <p><small className="label-text text-red-500">{setError}</small></p>
			  <input type="submit" className="btn w-full max-w-xs text-white" value="Sign Up"/>
			</form>
			<p><small>Already have an account? <Link className="text-primary" to="/login">Login an Account </Link></small></p>
			<div className="divider">OR</div>
			<button onClick={handelGoogle} className="btn btn-outline">Continue With Google</button>
  
		  </div>
		</div>
	  </div>
	);
};

export default Signup;