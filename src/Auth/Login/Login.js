import React, { useEffect } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Pages/Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import useToken from '../../hooks/useToken'

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user,loading, error,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);
  const { register,formState: { errors },handleSubmit} = useForm();
  const [token] = useToken(user || gUser)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(()=> {
      if ( token) {
        navigate(from, {replace: true});
      }
    },[token, from, navigate])


   if(  loading || gLoading){
     return <Loading></Loading>
   }

   if(error || gError){
     signInError = <p className="text-red-500"><small> {error?.message || gError?.message}</small></p>
   }

 

  const onSubmit = data =>{
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword =  async(e) =>{
    const email= e.target.value
    if(email){
      await sendPasswordResetEmail(email);
      alert('Sent email');
    }
    else{
      alert('please enter your email');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
                {/* //EMail  */}
          <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Email</span>
      </label>

      <input type="email" 
      placeholder="Your Email"
       className="input input-bordered w-full max-w-xs" 
       {...register("email", {
         required:{
           value:true,
           message: 'Email is Required'
         },
        pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
        }
      })}
       />
        <label className="label">
        {errors.email?.type === "required" && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
        {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
        </label>
         </div>
         

         {/* password  */}
         <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Password</span>
      </label>

      <input type="password" 
      placeholder="Your Password"
       className="input input-bordered w-full max-w-xs" 
       {...register("password", {
         required:{
           value:true,
           message: 'Password is Required'
         },
        minLength: {
          value: 6,
          message: 'Must be 6 characters or longer'
        }
      })}
       />
        <label className="label">
        {errors.password?.type === "required" && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
        {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
        </label>
         </div>
        {/* password end  */}
        <label class="label mt-0 ">
        <span class="label-text-alt text-center" onClick={resetPassword}>Forgot Password?</span>
    
      </label>
          {signInError}
            <input className="btn w-full max-w-xs text-white" type="submit" value='Login' />
          </form>

          <p className="text-center"> <small> New to Doctors Portal? <Link className="text-primary" to='/signup'>Create New Account</Link> </small> </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
