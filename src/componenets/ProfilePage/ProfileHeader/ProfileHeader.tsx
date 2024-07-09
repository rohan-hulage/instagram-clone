import React from 'react'
import "./profileheader.scss"



const ProfileHeader = () => {
  return (
    <div className='profile-page-header'>
      <div className='header-logo'>
        <img src='src/assets/WhatsApp Image 2024-07-04 at 21.45.30.jpeg' alt='profile0img'></img>
      </div>

      <div className='header-content'>
        <div className='content-username-edit'>
          <span>abhishek04</span>
          <button className='edit-button'>Edit Profile</button>
        </div>
        
        <div className='count-post-followers-following'>
          <div className='count-post'><span>11</span> Posts</div>
          <div className='count-post'><span>396</span> Followers</div>
          <div className='count-post'><span>390</span> Following</div>
        </div>

        <div className='profile-header-fullname'>
            Abhishek Hulage
        </div>

        <div className='profile-header-bio'>
          profile bio
        </div>

      </div>
     
    </div>
  )
}

export default ProfileHeader
