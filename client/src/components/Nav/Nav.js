import React from "react";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          BooksMERN
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Saved">
          Saved
        </a>
      </li>
    </ul>
  );
}

export default Nav;
