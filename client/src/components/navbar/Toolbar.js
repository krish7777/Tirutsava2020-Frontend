import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./Toolbar.css";
import logo from "./tirutsava_logo.png";

const toolbar = props => (
  <div className="toolbar">
    <nav className="toolbar__navigation">
      <div className="spacer2" />
      <div className="toolbar__logo">
        {/* <Link to="/">
          <i className="arrow-left fa fas fa-less-than fa-lg" />
          <span className="logo-text">MINDSPRINT</span>

          <i className="arrow-right fa fas fa-greater-than fa-lg" />
        </Link> */}
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            style={{ height: "40px", width: "150px" }}
            alt="Tirutsava Logo"
          />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/testimonials">TESTIMONIALS</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/sponsers">SPONSERS</Link>
          </li>
          <li>
            <Link className="special-button" id="onReg" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <Burger click={props.drawer} xbtn={props.xbtn} />
      </div>
    </nav>
  </div>
);

export default toolbar;
