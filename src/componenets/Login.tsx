import React, { useState } from 'react';
import '/Users/abhishekhulage/Desktop/instagram-clone/src/styles/authform.scss';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const {loading, error, login} = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='form-input-container'>
        <input className='number-email-username' placeholder='Username or Email' type='email'
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
         <div className='password-input'>
            <input className='password' placeholder='Password' type={showPassword ? 'text' : 'password'}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <button type='button' className='show-password-button' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
        {error && <div className='error-message'>Incorrect username or password</div>}
        <button className='login-button' type='submit'
        onClick={() => login(inputs)}
        >Log in</button>
    </div>
  );
};

export default Login;
