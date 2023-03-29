import './ProjectsListItem.scss';

interface ProjectsListItemProps {
  img: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectsListItem = (props: ProjectsListItemProps) => {
  return (
    <div className="project-card">
      <img src={props.img}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>{props.technologies}</div>
    </div>
  );
};

export default ProjectsListItem;
