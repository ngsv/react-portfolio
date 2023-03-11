import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            varius metus. Sed in auctor mi. Duis ut leo fringilla, ultricies
            felis eget, sollicitudin turpis. Praesent nibh ex, iaculis quis quam
            quis, malesuada dapibus velit. Nullam condimentum magna non risus
            porttitor sodales. Proin tempor, enim pretium pulvinar pretium, enim
            sapien vulputate purus, et ultrices eros lectus eget lorem. Vivamus
            varius sem justo, et elementum tortor venenatis id. In consequat
            purus eu metus molestie, vitae dictum quam viverra. Aenean eu
            accumsan enim. Sed vestibulum nisi eget metus venenatis, nec
            tristique nisl tempus. Sed a elementum lacus. In a maximus augue,
            non pharetra diam. Suspendisse leo lorem, ultricies vitae nisl et,
            condimentum posuere velit.
          </p>
          <div className="contact-form">
            <form>
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
                  <input className="flat-button" type="submit" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" active />
    </>
  );
};

export default Contact;
