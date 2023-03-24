import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const sendEmail = (event) => {
        event.preventDefault();
        // Account for the case in which refForm.current is null
        if (refForm.current === null) {
            return;
        }
        emailjs
            .sendForm('gmail', 'contact_form', refForm.current, 'xABVrBbkhBIV1ZJnA')
            .then(() => {
            alert('Message successfully sent!');
            window.location.reload();
        }, () => {
            alert('Failed to send the message, please try again.');
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container contact-page", children: [_jsxs("div", { className: "text-zone", children: [_jsx("h1", { children: _jsx(AnimatedLetters, { letterClass: letterClass, strArray: ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'], idx: 15, cIdx: 35 }) }), _jsx("div", { className: "paragraph-div", children: _jsx("p", { children: "I'm open to career opportunities - send me a message using the form below, and feel free to leave your LinkedIn so we can keep in touch." }) }), _jsx("div", { className: "contact-form", children: _jsx("form", { ref: refForm, onSubmit: sendEmail, children: _jsxs("ul", { children: [_jsx("li", { className: "half", children: _jsx("input", { type: "text", name: "name", placeholder: "Name", required: true }) }), _jsx("li", { className: "half", children: _jsx("input", { type: "email", name: "email", placeholder: "Email", required: true }) }), _jsx("li", { children: _jsx("input", { type: "text", name: "subject", placeholder: "Subject", required: true }) }), _jsx("li", { children: _jsx("textarea", { name: "message", placeholder: "Message", required: true }) }), _jsx("li", { children: _jsx("input", { className: "flat-button", type: "submit", value: "SEND MESSAGE" }) })] }) }) })] }), _jsxs("div", { className: "map-wrap", children: [_jsxs("div", { className: "info-map", children: ["Steven Ngov,", _jsx("br", {}), "Canada,", _jsx("br", {}), "North York", _jsx("br", {}), _jsx("span", { children: "gl.steven.ngov@gmail.com" })] }), _jsxs(MapContainer, { center: [43.744276156528365, -79.484063840846], zoom: 11, children: [_jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), _jsx(Circle, { className: "circle", center: [43.744276156528365, -79.484063840846], radius: 2000, children: _jsx(Tooltip, { className: "tooltip", children: "Steven lives here!" }) })] })] })] }), _jsx(Loader, { type: "ball-scale-ripple-multiple", active: true })] }));
};
export default Contact;
