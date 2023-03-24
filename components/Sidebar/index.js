import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_steven.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
const Sidebar = () => {
    return (_jsxs("div", { className: "nav-bar", children: [_jsxs(Link, { className: "logo", to: "/", children: [_jsx("img", { src: LogoS, alt: "logo" }), _jsx("img", { className: "sub-logo", src: LogoSubtitle, alt: "steven" })] }), _jsxs("nav", { children: [_jsx(NavLink, { className: ({ isActive }) => (isActive ? 'active' : ''), to: "/", children: _jsx(FontAwesomeIcon, { icon: faHome, color: "4d4d4e" }) }), _jsx(NavLink, { className: `about-link ${(isActive) => isActive ? 'active' : ''}`, to: "/about", children: _jsx(FontAwesomeIcon, { icon: faUser, color: "4d4d4e" }) }), _jsx(NavLink, { className: `contact-link ${(isActive) => isActive ? 'active' : ''}`, to: "/contact", children: _jsx(FontAwesomeIcon, { icon: faEnvelope, color: "4d4d4e" }) })] }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { target: "_blank", rel: "noreferrer", href: "https://github.com/ngsv", children: _jsx(FontAwesomeIcon, { icon: faGithub, color: "#4d4d4e" }) }) }), _jsx("li", { children: _jsx("a", { target: "_blank", rel: "noreferrer", href: "https://linkedin.com/in/ngov-steven", children: _jsx(FontAwesomeIcon, { icon: faLinkedin, color: "#4d4d4e" }) }) })] })] }));
};
export default Sidebar;
