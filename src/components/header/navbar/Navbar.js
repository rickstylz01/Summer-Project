import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const flavorsCategories = ['Soft Fruits', 'Citrus', 'Tropical'];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Enable hover effect for dropdown menus
    const dropdownMenus = document.querySelectorAll('.dropdown');
    dropdownMenus.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').classList.add('show');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      dropdownMenus.forEach((dropdown) => {
        dropdown.removeEventListener('mouseenter', () => {
        });
        dropdown.removeEventListener('mouseleave', () => {
        });
      });
    }
  }, [])


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
                 onClick={handleDropdownToggle}
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
              <div
                className="nav-link dropdown-toggle px-5"
                role="button"
                onClick={handleDropdownToggle}
              >
                <Link
                  to="/flavors"
                  className="d-inline-block"
                >
                  Flavors
                </Link>
              </div>
              <ul className="dropdown-menu">
                {flavorsCategories.map((category, index) => (
                  <Link
                    key={index}
                    className="dropdown-item"
                    to={`/flavors/categories/${encodeURIComponent(category)}`}
                  >
                    {category}
                  </Link>
                ))}
                {/*<li><a className="dropdown-item " href="#">Action</a></li>*/}
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
