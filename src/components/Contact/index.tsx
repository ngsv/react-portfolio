import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';

import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Account for the case in which refForm.current is null
    if (refForm.current === null) {
      return;
    }

    emailjs
      .sendForm('gmail', 'contact_form', refForm.current, 'xABVrBbkhBIV1ZJnA')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload();
        },
        () => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              cIdx={34}
            />
          </h1>
          <div className="paragraph-div">
            <p>
              I'm open to career opportunities - send me a message using the
              form below, and feel free to leave your LinkedIn so we can keep in
              touch.
            </p>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input
                    className="flat-button"
                    type="submit"
                    value="SEND MESSAGE"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Steven Ngov,
          <br />
          Canada,
          <br />
          North York
          <br />
          <span>gl.steven.ngov@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[43.744276156528365, -79.484063840846]}
            zoom={11}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle
              className="circle"
              center={[43.744276156528365, -79.484063840846]}
              radius={2000}
            >
              <Tooltip className="tooltip">Steven lives here!</Tooltip>
            </Circle>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" active />
    </>
  );
};

export default Contact;
