import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            }
            else if (location.pathname === '/about') {
                setPageClass('page-about');
            }
            else if (location.pathname === '/contact') {
                setPageClass('page-contact');
            }
        };
        handleLocation();
    }, [location]);
    return (_jsxs("div", { className: "App", children: [_jsx(Sidebar, {}), _jsxs("div", { className: `page ${pageClass}`, children: [_jsx("span", { className: "tags top-tags", children: "<body>" }), _jsx(Outlet, {}), _jsxs("span", { className: "tags bottom-tags", children: ["</body>", _jsx("br", {})] })] })] }));
};
export default Layout;
