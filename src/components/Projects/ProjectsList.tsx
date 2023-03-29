import { useState, useEffect } from 'react';

import projects from '../../data/projects.js';
import ProjectsListItem from './ProjectsListItem';
import AnimatedLetters from '../AnimatedLetters';

import './ProjectsList.scss';

// interface ProjectsListItemProps {
//   img: string;
//   title: string;
//   description: string;
//   technologies: string[];
// }

// interface ProjectsListProps extends Array<ProjectsListItemProps> {}

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
        <ul className="projects-list">{projectsListItems}</ul>
      </div>
    </>
  );
};

export default ProjectsList;
