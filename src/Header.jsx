import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/11985/11985702.png" alt="test" width="30" height="30"></img>
          SQRL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {localStorage.getItem("jwt") ? (
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  My Trips
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      View Trips
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Plan a Trip
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="action-nav">
            {localStorage.getItem("jwt") ? (
              <li className="nav-item">
                <LogoutLink />
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
