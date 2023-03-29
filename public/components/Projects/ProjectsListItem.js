import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProjectsListItem.scss';
const ProjectsListItem = (props) => {
    const { img, title, description, technologies } = props;
    return (_jsxs("div", { className: "project-card", children: [_jsx("img", { src: img }), _jsx("h2", { children: title }), _jsx("p", { children: description }), _jsx("div", { className: "technologies", children: technologies.map((technology, index) => (_jsx("div", { className: "technology-tag", children: technology }, index))) })] }));
};
export default ProjectsListItem;
