import { FcGoogle } from "react-icons/fc";

import useGoogleAuth from '../../hooks/useGoogleAuth';

const GoogleAuth = () => {
  const { handleGoogleAuth } = useGoogleAuth();

  return (
    <div className='social-login-container'>
      <button type='button' className='social-login-button' onClick={handleGoogleAuth}>
        <span className='google-logo'><FcGoogle /></span>
        <span>Log in with Google</span>
      </button>
    </div>

  )
}

export default GoogleAuth
