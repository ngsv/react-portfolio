import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../Sidebar';

import './index.scss';

const Layout = () => {
  const [pageClass, setPageClass] = useState('');
  const [height, setHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleLocation = () => {
      if (location.pathname === '/') {
        setPageClass('page-home');
      } else if (location.pathname === '/about') {
        setPageClass('page-about');
      } else if (location.pathname === '/projects') {
        setPageClass('page-projects');
      } else if (location.pathname === '/contact') {
        setPageClass('page-contact');
      }
    };

    handleLocation();
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      const projectsList = document.getElementsByClassName('projects-list')[0];

      const waitForDivLoad = setInterval(function () {
        if (projectsList) {
          if (window.innerWidth > 768) {
            setHeight(projectsList.scrollHeight + 450);
          } else {
            setHeight(projectsList.scrollHeight + 350);
          }
        }
        if (projectsList) {
          clearInterval(waitForDivLoad);
        }
      }, 100);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageProjectStyles = {
    minHeight: `${height}px`,
  };

  return (
    <div className="App">
      <Sidebar />
      <div
        className={`page ${pageClass}`}
        style={pageClass === 'page-projects' ? pageProjectStyles : {}}
      >
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        </span>
      </div>
    </div>
  );
};

export default Layout;
