import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
const Home = () => {
    // Letters can only have one animation at a time, one on initial load, and one on hover after initial load
    const [letterClass, setLetterClass] = useState('text-animate');
    // Strings we want to animate
    const nameArray = ['t', 'e', 'v', 'e', 'n'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container home-page", children: [_jsxs("div", { className: "text-zone", children: [_jsxs("h1", { children: [_jsx("span", { className: letterClass, children: "H" }), _jsx("span", { className: `${letterClass} _12`, children: "i," }), _jsx("br", {}), _jsx("span", { className: `${letterClass} _13`, children: "I" }), _jsx("span", { className: `${letterClass} _14`, children: "'m" }), _jsx("img", { src: LogoTitle, alt: "developer" }), _jsx(AnimatedLetters, { letterClass: letterClass, strArray: nameArray, idx: 15 }), _jsx("br", {}), _jsx(AnimatedLetters, { letterClass: letterClass, strArray: jobArray, idx: 20 })] }), _jsx("h2", { children: "Web Developer" }), _jsx(Link, { to: "/contact", className: "flat-button", children: "CONTACT ME" })] }), _jsx(Logo, {})] }), _jsx(Loader, { type: "ball-scale-ripple-multiple", active: true })] }));
};
export default Home;
