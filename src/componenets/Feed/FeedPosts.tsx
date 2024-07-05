import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import '/Users/abhishekhulage/Desktop/instagram-clone/src/styles/homepageLoader.scss';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    },1000)
  },[])
  return (
    <div className='post-container'>
       {isLoading && [0,1,2,3].map((_,idx) => (
            <div className="skeleton-post" key={idx}>
                <div className="skeleton skeleton-circle" style={{ width: '40px', height: '40px' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '30%' }}></div>
                <div className="skeleton skeleton-rect"></div>
                <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
            </div>
       ))} 

       {!isLoading  && (
        <>
            <FeedPost 
                img = "src/assets/WhatsApp Image 2024-07-04 at 21.45.30.jpeg"
                username = "abhishek04"
                profile = "src/assets/LSH69216003-1716455496501095941-Male_iLc50OHUqdVmovPJ_60X60.webp"
            />

            <FeedPost 
                img = "src/assets/WhatsApp Image 2024-07-04 at 21.43.07.jpeg"
                username = "s_vedashri_"
                profile = "src/assets/WhatsApp Image 2024-07-04 at 21.43.07.jpeg"
            />

            <FeedPost 
            img = "src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg"
            username = "pradyumna_g"
            profile = "src/assets/WhatsApp Image 2024-07-04 at 21.43.07.jpeg"/>
        </>
        )
       }
    </div>
  )
}

export default FeedPosts
