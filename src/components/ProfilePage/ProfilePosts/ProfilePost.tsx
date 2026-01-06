import React from 'react';
import "./profilepost.scss";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

interface ProfilePostProps {
  img: string;
  likes: number;
  comments: number;
}

const ProfilePost: React.FC<ProfilePostProps> = ({ img, likes, comments }) => {
  return (
    <div className='profile-post-container'>
      <div className="profile-post-inner-container">
        <img src={img} alt="profile post" />
        <div className="overlay">
          <div className="info">
            <span ><FaHeart className="likes"/> {likes}</span>
            <span ><FaComment className="comments"/> {comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePost;
