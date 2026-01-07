import { FcGoogle } from "react-icons/fc";
import React from "react";

import useGoogleAuth from '../../hooks/useGoogleAuth';

interface GoogleAuthProps {
  prefix?: string;
  mode: 'login' | 'signup';
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ prefix = "Log in", mode }) => {
  const { handleGoogleAuth } = useGoogleAuth();

  return (
    <div className='social-login-container'>
      <button type='button' className='social-login-button' onClick={() => handleGoogleAuth(mode)}>
        <span className='google-logo'><FcGoogle /></span>
        <span>{prefix} with Google</span>
      </button>
    </div>
  )
}

export default GoogleAuth
