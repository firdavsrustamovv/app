import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/storage";
import { logOutUser } from "../slice/auth";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOutUser());
    removeItem("token");
    navigate("/login");
  };
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
          {loggedIn ? (
            <>
              <p className="me-3 py-2 m-0 text-dark text-decoration-none ">
                {user.username}
              </p>
              <li>
                <NavLink
                  to={"/create-article"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Create
                </NavLink>
              </li>
              <button
                className="btn btn-outline-danger"
                onClick={logOutHandler}
                style={{ marginLeft: "10px" }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
