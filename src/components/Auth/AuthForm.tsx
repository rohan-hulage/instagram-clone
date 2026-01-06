import React, { useState } from 'react';
import './authform.scss';
import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';
import { InstagramLogo } from "../../assets/constants";

const AuthForm: React.FC = () => {
  const [isLogin, setLogin] = useState(true);

  const handleSignupSuccess = () => {
    setLogin(true);
  };

  return (
    <div className='auth-form-wrapper'>
      <div className='auth-form-container'>
        <form>
          <div className='instagram-name-logo'><InstagramLogo /></div>
          {isLogin ? <Login /> : <Signup onSignupSuccess={handleSignupSuccess} />}
          {isLogin && (
            <>
              <div className='line-container'>
                <hr />
                <div>OR</div>
                <hr />
              </div>
              <GoogleAuth />
              <div className='forgot-password-container'>
                <a href='/'>Forgot password?</a>
              </div>
            </>
          )}
        </form>
      </div>
      <div className='signup-container'>
        <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
        <a href='/' onClick={(e) => { e.preventDefault(); setLogin(!isLogin); }}>
          {isLogin ? "Sign up" : "Log in"}
        </a>
      </div>
    </div>
  );
};

export default AuthForm;