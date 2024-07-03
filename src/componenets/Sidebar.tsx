import { InstagramLogo, MessagesLogo, ReelsLogo,} from "../assets/constants";
import "/Users/abhishekhulage/Desktop/instagram-clone/src/styles/pagelayout.scss";
import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";





const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo '>
        <InstagramLogo />
      </div>

      <div className="sidebar-menu">
        <div className="sidebar-home logo">
          <GoHomeFill />
          <h2>Home</h2>
        </div>
        <div className="sidebar-search logo">
          <FiSearch />
          <h2>Search</h2>
        </div>
        <div className="sidebar-explore logo">
          <MdExplore />
          <h2>Explore</h2>
        </div>
        <div className="sidebar-reels logo">
          <ReelsLogo />
          <h2>Reels</h2>
        </div>
        <div className="sidebar-messages logo">
          <MessagesLogo />
          <h2>Messages</h2>
        </div>
        <div className="sidebar-notifications logo">
          <FaRegHeart />
          <h2>Notifications</h2>
        </div>
        <div className="sidebar-create logo">
          <FaRegPlusSquare />
          <h2>Create</h2>
        </div>
        <div className="sidebar-profile">
          <h2>Profile</h2>
        </div>
      </div>

    </div>
  );
};

export default SideBar;