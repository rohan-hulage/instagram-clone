import React from 'react'
import ProfileHeader from '../../componenets/ProfilePage/ProfileHeader/ProfileHeader'
import ProfileTabs from '../../componenets/ProfilePage/ProfileTabs/ProfileTabs'
import ProfilePosts from '../../componenets/ProfilePage/ProfilePosts/ProfilePosts'
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
