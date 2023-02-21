import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.scss";
function App() {
    return (_jsx(_Fragment, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Layout, {}) }) }) }));
}
export default App;
