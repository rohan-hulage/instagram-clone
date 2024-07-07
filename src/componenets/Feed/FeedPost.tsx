import React from 'react';
import "/Users/abhishekhulage/Desktop/instagram-clone/src/pages/HomePage/homepage.scss";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

interface FeedPostProps {
  img: string;
  username: string;
  profile: string;
}

const FeedPost: React.FC<FeedPostProps> = ({ img, username, profile }) => {
  return (
    <div className='post-inner-container'>
      <PostHeader username={username} profile={profile} />
      <div className='post-image'>
        <img src={img} alt={`${username}'s post`} />
      </div>
      <PostFooter username={username} />
    </div>
  );
}

export default FeedPost;
