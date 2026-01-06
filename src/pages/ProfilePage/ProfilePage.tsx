import ProfileHeader from '../../components/ProfilePage/ProfileHeader/ProfileHeader'
import ProfileTabs from '../../components/ProfilePage/ProfileTabs/ProfileTabs'
import ProfilePosts from '../../components/ProfilePage/ProfilePosts/ProfilePosts'
import "./profilepage.scss"

const ProfilePage = () => {
  return (
    <div className='profile-page-container'>
      <div className='profile-page-inner-container'>
        <ProfileHeader />
        <div className='profile-middle-line'></div>
        <ProfileTabs />
        <ProfilePosts />
      </div>

    </div>
  )
}

export default ProfilePage
