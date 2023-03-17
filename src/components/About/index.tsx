import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'e',
                ',',
                ' ',
                'M',
                'y',
                's',
                'e',
                'l',
                'f',
                ' ',
                '&',
                ' ',
                'I',
              ]}
              idx={15}
              cIdx={20}
            />
          </h1>
          <div className="paragraph-div">
            <p>
              Hello! I'm Steven, a mechanical engineer alumni from Toronto
              Metropolitan University. Before discovering my passion for
              programming, I worked in the manufacturing industry as an
              Engineering Associate. I decided to focalize my time and energy on
              programming, and thus, my self-learning journey began.
            </p>
            <p>
              What I love about programming is the fast-paced environment and
              the continuous learning process. Currently, I'm working on
              upgrading my skills in React and TypeScript.
            </p>
            <p>
              Outside of programming, I love the outdoors. Some of my hobbies
              include hiking, cycling, rock climbing, and snowboarding during
              the colder months.
            </p>
          </div>
        </div>
        <div className="stage-cube-cont">
          {/* <div className="particle-bg"></div> */}

          <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>

          <div className="cubespinner">
            <div className="face1 face--front">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
            <div className="face2 face--back">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3 face--right">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4 face--left">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5 face--top">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6 face--bottom">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" active />
    </>
  );
};

export default About;
