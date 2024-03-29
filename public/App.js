import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import ProjectsList from './components/Projects/ProjectsList';
import Contact from './components/Contact';
import './App.scss';
function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "projects", element: _jsx(ProjectsList, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) })] }) }));
}
export default App;
