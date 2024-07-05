import "/Users/abhishekhulage/Desktop/instagram-clone/src/styles/homepage.scss";
import FeedPosts from '../../componenets/Feed/FeedPosts';
import Stories from '../../componenets/Feed/Stories';
import SuggestedProfiles from "../../componenets/SuggestedProfiles/SuggestedProfiles";

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