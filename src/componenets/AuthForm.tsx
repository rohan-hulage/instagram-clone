import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import '/Users/abhishekhulage/Desktop/instagram-clone/src/styles/authform.scss';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleSignup = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsSignup(!isSignup);
  };
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleAuth = () => {
    if(!inputs.email || !inputs.password){
        alert("Please fill all the fields")
        return
    }

    navigate("/");
  }

  return (
    <div className='auth-container'>
      <div className='auth-form-container'>
        <form>
          <img src='src/assets/instagram-logo-name-removebg-preview.png' alt='instagram-name-logo' />
          <div className='form-input-container'>
            <input className='number-email-username' placeholder='username or email' type='email'
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email:e.target.value})}
            />
            <input className='password' placeholder='password' type='password'
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password:e.target.value})}
            />
            {isSignup && (
              <input className='confirm-password' placeholder='confirm password' type='password'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
              />
            )}
          </div>
          <button className='login-button' type='submit' onClick={handleAuth}>
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
          <div className='line-container'>
            <hr />
            <div>OR</div>
            <hr />
          </div>
          <div className='social-login-container'>
            <button className='social-login-button'>
              <span className='google-logo'><FcGoogle /></span>
              <span>Log in with Google</span>
            </button>
          </div>
          {!isSignup && (
            <div className='forgot-password-container'>
              <a href='/'>Forgot password?</a>
            </div>
          )}
        </form>
      </div>
      <div className='signup-container'>
        <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}</p>
        <a href='/' onClick={toggleSignup}>
          {isSignup ? 'Log in' : 'Sign up'}
        </a>
      </div>
    </div>
  );
};

export default AuthForm;
