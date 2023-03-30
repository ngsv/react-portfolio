import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import Sidebar from '../Sidebar';

import './index.scss';

const Layout = () => {
  const [pageClass, setPageClass] = useState('');
  const [height, setHeight] = useState(0);
  const location = useLocation();

  // Watches for route change
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

  // Watches for changes in projects list height - </body> tag on projects page
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
          clearInterval(waitForDivLoad);
        }
      }, 50);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  const bottomTagsClasses = classnames('tags', 'bottom-tags', {
    show: pageClass === 'page-projects',
  });

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

        <span className={bottomTagsClasses}>
          &lt;/body&gt;
          <br />
        </span>
      </div>
    </div>
  );
};

export default Layout;
