import React from 'react';

interface PostHeaderProps {
  username: string;
  profile: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, profile }) => {
  return (
    <div className='post-username-date'>
      <div className='profile-circle'>
        <img src={profile} alt={`${username}'s profile`} />
      </div>
      <span>{username}</span>
      <div className='post-dot'></div>
      <span className='post-date'>Some date</span>
    </div>
  );
}

export default PostHeader;
