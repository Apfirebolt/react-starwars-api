import React from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <nav>
      <p className="brand">Star Wars API</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/ships">Star Ships</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
