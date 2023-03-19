import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

import './index.scss';

const Home = () => {
  // Letters can only have one animation at a time, one on initial load, and one on hover after initial load
  const [letterClass, setLetterClass] = useState('text-animate');
  // Strings we want to animate
  const nameArray = ['t', 'e', 'v', 'e', 'n', ','];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              cIdx={1}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
              cIdx={7}
            />
          </h1>
          <h2>Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-scale-ripple-multiple" active />
    </>
  );
};

export default Home;
