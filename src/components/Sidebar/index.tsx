import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEye,
  faEnvelope,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_steven.png';
import Resume from '../../assets/Ngov_Steven-Resume.pdf';

import './index.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="steven" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>
        <NavLink
          className={`about-link ${(isActive: Boolean) =>
            isActive ? 'active' : ''}`}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>
        <NavLink
          className={`projects-link ${(isActive: Boolean) =>
            isActive ? 'active' : ''}`}
          to="/projects"
        >
          <FontAwesomeIcon icon={faEye} color="4d4d4e" />
        </NavLink>
        <NavLink
          className={`contact-link ${(isActive: Boolean) =>
            isActive ? 'active' : ''}`}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/ngsv">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/ngov-steven"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            type="application/pdf"
            href={Resume}
          >
            <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
