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
    return (
      <ProjectsListItem
        key={project.id}
        img={project.img}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        link={project.link}
      />
    );
  });

  return (
    <>
      <div className="container projects-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
            cIdx={40}
          />
        </h1>
        <div className="paragraph-div">
          <p>Click on one of my projects to learn more!</p>
        </div>
        <ul className="projects-list">{projectsListItems}</ul>
      </div>
    </>
  );
};

export default ProjectsList;
