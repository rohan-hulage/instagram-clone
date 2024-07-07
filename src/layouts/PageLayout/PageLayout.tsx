import React, { ReactNode } from 'react';
import Sidebar from '/Users/abhishekhulage/Desktop/instagram-clone/src/componenets//Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import "./pagelayout.scss";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className='pagelayout-container'>
      {pathname !== "/auth" && (
          <Sidebar />
      )}

      {children}
     
    </div>
  );
};

export default PageLayout;