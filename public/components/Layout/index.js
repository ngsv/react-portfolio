import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
const Layout = () => {
    return (_jsxs("div", { className: "App", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "page", children: [_jsx("span", { className: "tags top-tags", children: "<body>" }), _jsx(Outlet, {}), _jsxs("span", { className: "tags bottom-tags", children: ["</body>", _jsx("br", {})] })] })] }));
};
export default Layout;
