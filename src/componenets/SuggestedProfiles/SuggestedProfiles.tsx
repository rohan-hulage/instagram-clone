import React from 'react'
import SuggestedHeader from './SuggestedHeader';
import SuggestedProfile from './SuggestedProfile';
import { MdOutlineCopyright } from "react-icons/md";


const SuggestedProfiles = () => {
  return (
    <div className='suggested-container'>
      <SuggestedHeader username='abhishek04' profile='src/assets/LSH69216003-1716455496501095941-Male_iLc50OHUqdVmovPJ_60X60.webp' />

       <div className='suggested-text'>
            <div className='text-left'>Suggested for you</div>
            <a href=''>See all</a>
       </div>

        <SuggestedProfile 
            username='pratik_k' profile='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg' followersCount={1223}
        />
         <SuggestedProfile 
            username='disha_heen' profile='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg' followersCount={593}
        />
         <SuggestedProfile 
            username='aniruddha_g' profile='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg' followersCount={754}
        />
         <SuggestedProfile 
            username='neha_jadhav' profile='src/assets/WhatsApp Image 2024-07-04 at 21.43.08.jpeg' followersCount={953}
        />

        <div className='copyright'>
            <MdOutlineCopyright /> 2024 built by <a href='https://www.linkedin.com/in/abhishek-hulage/' target='_blank'>Abhishek Hulage</a>
        </div>

    </div>
  )
}

export default SuggestedProfiles
