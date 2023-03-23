import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../Sidebar';

import './index.scss';

const Layout = () => {
  const [pageClass, setPageClass] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleLocation = () => {
      if (location.pathname === '/') {
        setPageClass('page-home');
      } else if (location.pathname === '/about') {
        setPageClass('page-about');
      } else if (location.pathname === '/contact') {
        setPageClass('page-contact');
      }
    };

    handleLocation();
  }, [location]);

  return (
    <div className="App">
      <Sidebar />
      <div className={`page ${pageClass}`}>
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
