import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import '/Users/abhishekhulage/Desktop/instagram-clone/src/componenets/Feed/homepageLoader.scss'

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "5px"
    }}>

      {isLoading && [0,1,2,3,4,5].map((_,idx) => (
            <div className="skeleton-post" key={idx} style={{ width: '300px', aspectRatio: '4/5', objectFit: 'cover' , backgroundColor: "#ddd" }}></div>
       ))} 

{!isLoading  && (
        <>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
          <ProfilePost img='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg'/>
        </>
        )
       }
      
    </div>
  )
}

export default ProfilePosts
