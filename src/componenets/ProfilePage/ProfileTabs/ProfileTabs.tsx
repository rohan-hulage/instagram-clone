import { FaBookmark } from "react-icons/fa"
import { ReelsLogo } from "../../../assets/constants"
import "./profiletabs.scss"

const ProfileTabs = () => {
  return (
    <div className='profile-tabs-container'>
      <div className='post-tabs'>
        <img src='src/assets/profile.png' alt='post-icon'></img>
        <span>POSTS</span>
      </div>

      <div className='reels-tab'>
        <ReelsLogo />
        <span>REELS</span>
      </div>
      
      <div className='saved-tabs'>
        <FaBookmark className="icons"/>
        <span>SAVED</span>
      </div>

      <div className='tags-tabs'>
        <img src="src/assets/instagram-tag-icon.png" alt="tag-icon"></img>
        <span>TAGS</span>
      </div>
      
    </div>
  )
}

export default ProfileTabs
