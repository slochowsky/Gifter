import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        GIFTER
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Show Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            Add Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;