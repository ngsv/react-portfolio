import './ProjectsListItem.scss';

interface ProjectsListItemProps {
  img: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const handleClick = (link: string) => {
  window.open(link, '_blank');
};

const ProjectsListItem = (props: ProjectsListItemProps) => {
  const { img, title, description, technologies, link } = props;

  return (
    <div className="project-card" onClick={() => handleClick(link)}>
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
