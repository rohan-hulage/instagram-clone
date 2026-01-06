import './suggestedprofiles.scss';


interface PostHeaderProps {
    username: string;
    profile: string;
  }
const SuggestedHeader: React.FC<PostHeaderProps> = ({ username, profile }) => {
  return (
    <div className='suggested-header'>
        <div className='profile-circle'>
            <img src={profile} alt={`${username}'s profile`} />
            <span>{username}</span>
        </div>
        <a href='/auth'>Logout</a>
      
    </div>
  )
}

export default SuggestedHeader
