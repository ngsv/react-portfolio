import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGitAlt, faNodeJs, } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container about-page", children: [_jsxs("div", { className: "text-zone", children: [_jsx("h1", { children: _jsx(AnimatedLetters, { letterClass: letterClass, strArray: [
                                        'M',
                                        'e',
                                        ',',
                                        ' ',
                                        'M',
                                        'y',
                                        's',
                                        'e',
                                        'l',
                                        'f',
                                        ' ',
                                        '&',
                                        ' ',
                                        'I',
                                    ], idx: 15, cIdx: 21 }) }), _jsxs("div", { className: "paragraph-div", children: [_jsx("p", { children: "Hello! I'm Steven, a mechanical engineer alumni from Toronto Metropolitan University. Before discovering my passion for programming, I worked in the manufacturing industry as an Engineering Associate. I decided to focalize my time and energy on programming, and thus, my self-learning journey began." }), _jsx("p", { children: "What I love about programming is the fast-paced environment and the continuous learning process. Currently, I'm working on upgrading my skills in React and TypeScript." }), _jsx("p", { children: "Outside of programming, I love the outdoors. Some of my hobbies include hiking, cycling, rock climbing, and snowboarding during the colder months." })] })] }), _jsxs("div", { className: "stage-cube-cont", children: [_jsxs("div", { className: "animation-wrapper", children: [_jsx("div", { className: "particle particle-1" }), _jsx("div", { className: "particle particle-2" }), _jsx("div", { className: "particle particle-3" }), _jsx("div", { className: "particle particle-4" })] }), _jsxs("div", { className: "cubespinner", children: [_jsx("div", { className: "face1 face--front", children: _jsx(FontAwesomeIcon, { icon: faNodeJs, color: "#3C873A" }) }), _jsx("div", { className: "face2 face--back", children: _jsx(FontAwesomeIcon, { icon: faHtml5, color: "#F06529" }) }), _jsx("div", { className: "face3 face--right", children: _jsx(FontAwesomeIcon, { icon: faCss3Alt, color: "#28A4D9" }) }), _jsx("div", { className: "face4 face--left", children: _jsx(FontAwesomeIcon, { icon: faGitAlt, color: "#EC4D28" }) }), _jsx("div", { className: "face5 face--top", children: _jsx(FontAwesomeIcon, { icon: faJsSquare, color: "#EFD81D" }) }), _jsx("div", { className: "face6 face--bottom", children: _jsx(FontAwesomeIcon, { icon: faReact, color: "#5ED4F4" }) })] })] })] }), _jsx(Loader, { type: "ball-scale-ripple-multiple", active: true })] }));
};
export default About;
