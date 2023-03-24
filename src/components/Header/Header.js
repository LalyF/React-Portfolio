import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; // import CSS file

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/React-Portfolio/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              activeClassName="nav-link-custom" /* apply the CSS class */
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/React-Portfolio/projectgallery"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              activeClassName="nav-link-custom" /* apply the CSS class */
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/React-Portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              activeClassName="nav-link-custom" /* apply the CSS class */
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
