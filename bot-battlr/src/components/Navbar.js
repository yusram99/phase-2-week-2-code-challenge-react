import React from "react";
import './navbar.css'; // Import the CSS file

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            HOME
          </a>
          <a href="/bot-army" className="navbar-brand">
            Your Bot Army
          </a>
          <a href="/bort-collection" className="navbar-brand">
            Bot Collection
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;