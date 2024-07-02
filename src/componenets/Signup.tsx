import React, { useState } from 'react';
import '/Users/abhishekhulage/Desktop/instagram-clone/src/styles/authform.scss';
import useSignup from '../hooks/useSignup';

interface SignupProps {
  onSignupSuccess: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignupSuccess }) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignup();

  const handleSignup = async () => {
    const success = await signup(inputs);
    if (success) {
      onSignupSuccess();
    }
  };

  return (
    <div className='form-input-container'>
      <input
        className='number-email-username'
        placeholder='Email'
        type='email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        className='number-email-username'
        placeholder='Username'
        type='text'
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <input
        className='number-email-username'
        placeholder='Full Name'
        type='text'
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
      {error && <div className='error-message'>Error: {error.message}</div>}
      <button
        className='login-button'
        type='submit'
        onClick={handleSignup}
        disabled={loading}
      >
        {loading ? 'Signing up...' : 'Sign up'}
      </button>
    </div>
  );
};

export default Signup;