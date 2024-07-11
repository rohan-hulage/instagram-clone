import React from 'react';
import "./profilepost.scss";

interface ProfilePostProps {
  img: string;
}

const ProfilePost: React.FC<ProfilePostProps> = ({ img }) => {
  return (
    <div className='profile-post-container'>
      <div className="profile-post-inner-container">
        <img src={img} alt="profile post" />
      </div>
    </div>
  );
}

export default ProfilePost;
