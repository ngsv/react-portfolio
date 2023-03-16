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
                                    ], idx: 15, cIdx: 20 }) }), _jsxs("div", { className: "paragraph-div", children: [_jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat sapien in lacus gravida ullamcorper. Integer condimentum eget erat et feugiat. Maecenas vitae laoreet ipsum. Phasellus pellentesque felis et nibh fringilla euismod. Quisque auctor dapibus porta. Aliquam eget rutrum magna. Proin placerat nec quam a molestie. Donec sed nulla eget dolor eleifend rutrum ut a lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pulvinar rutrum pulvinar. Praesent semper, felis lobortis sagittis maximus, diam purus ultrices metus, vitae ullamcorper leo leo sit amet tortor. Donec varius, nunc ut efficitur suscipit, lectus tortor malesuada orci, et suscipit augue nibh et lacus. Praesent blandit massa quis ipsum laoreet sagittis." }), _jsx("p", { children: "Etiam in diam nec augue auctor posuere et non ligula. Maecenas eleifend ex sed erat venenatis, ac viverra ligula laoreet. Nunc lobortis elit nec egestas venenatis. Morbi consequat justo vitae facilisis bibendum. Quisque ipsum mi, scelerisque non nunc eget, venenatis imperdiet tellus. Fusce viverra turpis eget rhoncus blandit. Donec volutpat sapien eu dolor vehicula, a tempus quam aliquet." }), _jsx("p", { children: "Integer mattis ante nisi, vel aliquet erat convallis et. Cras in fermentum massa, ac mollis quam. Donec elementum diam a quam hendrerit volutpat. Suspendisse pretium leo nunc, et luctus metus dapibus sit amet. Vestibulum luctus velit commodo dolor lacinia tempus. Aliquam at odio porttitor erat commodo blandit quis et neque. Suspendisse vehicula arcu dolor, eu venenatis urna pharetra non. Aliquam ut aliquam massa. Etiam fermentum, augue eget elementum sagittis, ipsum mauris hendrerit ipsum, nec ullamcorper est diam sed metus. Vivamus tincidunt eu justo sit amet congue." })] })] }), _jsx("div", { className: "stage-cube-cont", children: _jsxs("div", { className: "cubespinner", children: [_jsx("div", { className: "face1 face--front", children: _jsx(FontAwesomeIcon, { icon: faNodeJs, color: "#3C873A" }) }), _jsx("div", { className: "face2 face--back", children: _jsx(FontAwesomeIcon, { icon: faHtml5, color: "#F06529" }) }), _jsx("div", { className: "face3 face--right", children: _jsx(FontAwesomeIcon, { icon: faCss3Alt, color: "#28A4D9" }) }), _jsx("div", { className: "face4 face--left", children: _jsx(FontAwesomeIcon, { icon: faGitAlt, color: "#EC4D28" }) }), _jsx("div", { className: "face5 face--top", children: _jsx(FontAwesomeIcon, { icon: faJsSquare, color: "#EFD81D" }) }), _jsx("div", { className: "face6 face--bottom", children: _jsx(FontAwesomeIcon, { icon: faReact, color: "#5ED4F4" }) })] }) })] }), _jsx(Loader, { type: "ball-scale-ripple-multiple", active: true })] }));
};
export default About;
