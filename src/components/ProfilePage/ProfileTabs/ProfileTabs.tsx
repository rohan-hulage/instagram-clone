import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { ReelsLogo } from "../../../assets/constants";
import "./profiletabs.scss";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className='profile-tabs-container'>
      <div
        className={`post-tabs ${activeTab === 'posts' ? 'active' : ''}`}
        onClick={() => setActiveTab('posts')}
      >
        <img src='src/assets/profile.png' alt='post-icon' />
        <span>POSTS</span>
      </div>

      <div
        className={`reels-tab ${activeTab === 'reels' ? 'active' : ''}`}
        onClick={() => setActiveTab('reels')}
      >
        <ReelsLogo />
        <span>REELS</span>
      </div>

      <div
        className={`saved-tabs ${activeTab === 'saved' ? 'active' : ''}`}
        onClick={() => setActiveTab('saved')}
      >
        <FaBookmark className="icons" />
        <span>SAVED</span>
      </div>

      <div
        className={`tags-tabs ${activeTab === 'tags' ? 'active' : ''}`}
        onClick={() => setActiveTab('tags')}
      >
        <img src="src/assets/instagram-tag-icon.png" alt="tag-icon" />
        <span>TAGS</span>
      </div>
    </div>
  );
}

export default ProfileTabs;
