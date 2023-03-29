import './ProjectsListItem.scss';

interface ProjectsListItemProps {
  img: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectsListItem = (props: ProjectsListItemProps) => {
  const { img, title, description, technologies } = props;

  return (
    <div className="project-card">
      <img src={img}></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <div key={index} className="technology-tag">
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListItem;
