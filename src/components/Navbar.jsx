import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">Ahmed.</Link>
        </h1>
      </div>
      <nav className="nav">
        <FontAwesomeIcon
          icon={faBars}
          className="btn__menu-open"
          onClick={() => setHideMenu(true)}
        />
        {hideMenu && (
          <div className="overlay" onClick={() => setHideMenu(false)}></div>
        )}
        <ul className={`nav__lists ${hideMenu && "open"}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className="btn__menu-close"
            onClick={() => setHideMenu(false)}
          />

          <li className="home">
            <NavLink to="/" onClick={() => setHideMenu(false)}>
              Home
            </NavLink>
          </li>
          <li className="about">
            <NavLink to="about" onClick={() => setHideMenu(false)}>
              About
            </NavLink>
          </li>
          <li className="project">
            <NavLink to="projects" onClick={() => setHideMenu(false)}>
              Projects
            </NavLink>
          </li>
          <li className="contact">
            <NavLink to="contact" onClick={() => setHideMenu(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
