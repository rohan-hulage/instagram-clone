import './auth.scss'
import AuthForm from '../../components/Auth/AuthForm'

const AuthPage = () => {
  return (
    <div className='auth-container'>
      <div className='auth-container-inner'>
        <div className='auth-left'>
          <img src='/src/assets/instagram-mobile-logo.png' alt='Instagram Mobile' />
        </div>
        <div className='auth-right'>
          <AuthForm />

          <div className='get-app-container'>
            <p>Get the app.</p>
            <div className='app-store-images'>
              {/* Placeholders for App Store buttons, user can fill these related images later or I can try to find them if they exist in assets, for now just text or simple boxes if no image found */}
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="Get it on Google Play" />
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Get it on Microsoft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

