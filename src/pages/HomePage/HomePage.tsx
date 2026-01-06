import "./homepage.scss";
import FeedPosts from '../../components/Feed/FeedPosts';
import Stories from '../../components/Feed/Stories';
import SuggestedProfiles from "../../components/SuggestedProfiles/SuggestedProfiles";

const HomePage = () => {

  return (

    <div className='homepage-container'>

      <div className='feed-post-stories'>
        <Stories />
        <FeedPosts />
      </div>

      <SuggestedProfiles />


    </div>
  );
}

export default HomePage;