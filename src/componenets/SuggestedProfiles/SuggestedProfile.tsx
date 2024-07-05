import { useState, FC } from "react";


interface PostHeaderProps {
    username: string;
    profile: string;
    followersCount: number;
}

const SuggestedProfile: FC<PostHeaderProps> = ({ username, profile, followersCount }) => {

    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    }   
  return (
    <div className='suggested-profile'>
         <div className='profile-circle'>
            <img src={profile} alt={`${username}'s profile`} />

            <div className="name-count">
                <p>{username}</p>
                <span>{followersCount} followers</span>
            </div>
            
        </div>
        <button onClick={handleFollow}>
                {isFollowed ? "Unfollow" : "Follow"}
        </button>
      
    </div>
  )
}

export default SuggestedProfile
