
import './stories.scss';
import profileImg from '../../assets/profile.png';
import userImg from '../../assets/LSH69216003-1716455496501095941-Male_iLc50OHUqdVmovPJ_60X60.webp';

interface Story {
  id: number;
  username: string;
  avatar: string;
}

const MOCK_STORIES: Story[] = [
  { id: 1, username: 'johndoe', avatar: userImg },
  { id: 2, username: 'janedoe', avatar: profileImg },
  { id: 3, username: 'alex_smith', avatar: userImg },
  { id: 4, username: 'sarah_j', avatar: profileImg },
  { id: 5, username: 'mike_tyson', avatar: userImg },
  { id: 6, username: 'emily_rose', avatar: profileImg },
  { id: 7, username: 'chris_evans', avatar: userImg },
  { id: 8, username: 'natasha_r', avatar: profileImg },
  { id: 9, username: 'bruce_wayne', avatar: userImg },
  { id: 10, username: 'clark_kent', avatar: profileImg },
];

const Stories = () => {
  return (
    <div className='stories-wrapper'>
      {MOCK_STORIES.map((story) => (
        <div className='story-item' key={story.id}>
          <div className='story-ring'>
            <img src={story.avatar} alt={`${story.username}'s story`} className='story-avatar' />
          </div>
          <span className='story-username'>{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
