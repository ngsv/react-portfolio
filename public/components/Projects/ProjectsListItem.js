import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProjectsListItem.scss';
const handleClick = (link) => {
    window.open(link, '_blank');
};
const ProjectsListItem = (props) => {
    const { img, title, description, technologies, link } = props;
    return (_jsxs("div", { className: "project-card", onClick: () => handleClick(link), children: [_jsx("img", { src: img }), _jsx("h2", { children: title }), _jsx("p", { children: description }), _jsx("div", { className: "technologies", children: technologies.map((technology, index) => (_jsx("div", { className: "technology-tag", children: technology }, index))) })] }));
};
export default ProjectsListItem;
