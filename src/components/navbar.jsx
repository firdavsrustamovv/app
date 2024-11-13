import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Simple App</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
