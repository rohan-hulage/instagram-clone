import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authform.scss';
import useLogin from '../../hooks/useLogin';

interface Inputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    password: '',
  });

  const { loading, error, login } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(inputs);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className='form-input-container'>
      <input
        className='number-email-username'
        placeholder='Username or Email'
        type='email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <div className='password-input'>
        <input
          className='password'
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <button
          type='button'
          className='show-password-button'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <div className='error-message'>Incorrect username or password</div>}
      <button
        className='login-button'
        type='submit'
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </div>
  );
};

export default Login;