import React from 'react'
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  return (
    <div className='social-login-container'>
        <button className='social-login-button'>
        <span className='google-logo'><FcGoogle /></span>
        <span>Log in with Google</span>
        </button>
    </div>
   
  )
}

export default GoogleAuth
