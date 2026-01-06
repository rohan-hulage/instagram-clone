import './auth.scss'
import AuthForm from '../../components/Auth/AuthForm'

const AuthPage = () => {
  return (
    <div className='auth-contianer'>
      <div>
        <img src='src/assets/instagram-mobile-logo.png' alt='instagram-login-mobile' />
      </div>
      <div className='auth-form'>
        <AuthForm />
      </div>
    </div>
  )
}

export default AuthPage

