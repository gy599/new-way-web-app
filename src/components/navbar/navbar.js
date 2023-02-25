import React from "react";
import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";


const Navbar = () => {
    const navdata=[
        {
            title:'Home',
            path:RouteLinks.home,
        },
        {
            title:'Our Story',
            path:RouteLinks.ourStory,
        },
        {
            title:'Become a member',
            path:RouteLinks.createAccount
        },
        {
            title:'Sign in',
            path:RouteLinks.signIn
        },
        {
            title:'Get Started',
            path:RouteLinks.getStarted
        }


    ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        
        <div className="container navbar-container">
          <div className="">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo icon" />
            </Link>
            <span
              className="icon-text ms-2
            "
            >
              Newway
            </span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 justify-content-end align-items-end" id="navbarNav">
            <ul className="navbar-nav">
            {navdata.map((item, index) => {
              return (
                <li className='nav-item' key={index}>
                  <Link to={item.path} className='nav-link' key={index}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
