import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProjectsListItem.scss';
const ProjectsListItem = (props) => {
    return (_jsxs("div", { className: "project-card", children: [_jsx("img", { src: props.img }), _jsx("h2", { children: props.title }), _jsx("p", { children: props.description }), _jsx("div", { children: props.technologies })] }));
};
export default ProjectsListItem;
