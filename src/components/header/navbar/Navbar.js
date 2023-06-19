import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-5"
                 aria-current="page"
                 href="#"
                 role="button"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
              >
                Capabilities
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Design</a></li>
                <li><a className="dropdown-item" href="#">Production</a></li>
                <li><a className="dropdown-item" href="#">Certification</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-5" href="#" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                Flavors
              </a>
              <ul className="dropdown-menu">
                {/*dynamic list of all flavor categories*/}
                <li><a className="dropdown-item " href="#">Action</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link px-5" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-5" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
