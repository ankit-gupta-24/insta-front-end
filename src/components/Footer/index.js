import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="footer">
      <div>
        <ul>
          <li>
            <NavLink to="/">About</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Help</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Press</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Jobs</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Privacy</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Locations</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Top Accounts</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Hashtags</NavLink>{" "}
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; {year} INSTAGRAM</p>
      </div>
    </div>
  );
}

export default Footer;
