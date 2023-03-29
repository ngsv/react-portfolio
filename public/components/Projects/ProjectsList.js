import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import projects from '../../data/projects.js';
import ProjectsListItem from './ProjectsListItem';
import AnimatedLetters from '../AnimatedLetters';
import './ProjectsList.scss';
const ProjectsList = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const projectsListItems = projects.map((project) => {
        return (_jsx(ProjectsListItem, { img: project.img, title: project.title, description: project.description, technologies: project.technologies }, project.id));
    });
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container projects-page", children: [_jsx("h1", { children: _jsx(AnimatedLetters, { letterClass: letterClass, strArray: ['M', 'y', ' ', 'W', 'o', 'r', 'k'], idx: 15, cIdx: 40 }) }), _jsx("div", { className: "paragraph-div", children: _jsx("p", { children: "Click on one of my projects to learn more!" }) }), _jsx("ul", { className: "projects-list", children: projectsListItems })] }) }));
};
export default ProjectsList;
