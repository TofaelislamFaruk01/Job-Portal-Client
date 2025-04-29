import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';

import SignInLottieData from '../../assets/Lottie/SignIn.json'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';


const SignIn = () => {

    const {user,signInUser} = useContext(AuthContext);

     const [errorMessage, setErrorMessage] = useState({
            email: '',
            password: '',
            firebase: ''
        });
    
        const handleSignIn=(event)=>{
    
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password);
    
    
           //password validation
            // Regex patterns
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    
            const newErrors = { email: '', password: '', firebase: '' };
    
            // Email validation
            if (!emailRegex.test(email)) {
                newErrors.email = 'Please enter a valid email address.';
            }
    
            if (!passwordRegex.test(password)) {
                newErrors.password =
                    'Password must be at least 8 characters long and include uppercase, lowercase, and a number.';
            }
    
           

            signInUser(email,password)
            .then((result)=>{
                const currentUser = result.user;
               // setUser(currentUser);
                console.log("sign in user = ",currentUser);
                form.reset();
                
            })
            .catch((error)=>{
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
               newErrors.firebase= `${errorMessage}`;
               setErrorMessage(newErrors);
            })


             // If any errors exist, show them and stop submission
             if (newErrors.email || newErrors.password || newErrors.firebase) {
                setErrorMessage(newErrors);
                return;
            }
    
           
            // Clear previous errors
            setErrorMessage({ email: '', password: '', firebase: '' });

           
        }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left max-w-96">
            
            <Lottie animationData={SignInLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-12 mt-4">Log in now!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                {errorMessage.email && (
                                      <p className="text-red-500 text-sm mt-1">{errorMessage.email}</p>
                                  )}
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                {errorMessage.password && (
                                      <p className="text-red-500 text-sm mt-1">{errorMessage.password}</p>
                                  )}
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Log In</button>
                <p>Don't have an account? Create an account. Please <Link to={"/register"} className='text-blue-600 font-semibold link link-hover'> Register</Link></p>
                {errorMessage.firebase && (
                                      <p className="text-red-500 text-sm mt-4">{errorMessage.firebase}</p>
                                  )}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;