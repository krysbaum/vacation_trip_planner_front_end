import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
