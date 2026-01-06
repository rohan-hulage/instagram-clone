import './suggestedprofiles.scss';
import useLogout from "../../hooks/useLogout";
import React from 'react';

interface PostHeaderProps {
  username: string;
  profile: string;
}
const SuggestedHeader: React.FC<PostHeaderProps> = ({ username, profile }) => {
  const { handleLogout, loading } = useLogout();

  return (
    <div className='suggested-header'>
      <div className='profile-circle'>
        <img src={profile} alt={`${username}'s profile`} />
        <span>{username}</span>
      </div>
      <div
        onClick={handleLogout}
        className='logout-btn'
      >
        {loading ? "Logging out..." : "Log out"}
      </div>
    </div>
  )
}

export default SuggestedHeader
