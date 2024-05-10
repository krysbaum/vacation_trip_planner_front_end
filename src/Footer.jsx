import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Footer() {
  return (
    <footer
      className="page-footer font-small text-end text-light blue pt-4 bg-dark border-bottom border-body fixed-bottom"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://static-00.iconduck.com/assets.00/dumpling-emoji-256x254-1hfmw85e.png"
            alt="test"
            width="30"
            height="30"
          ></img>
          Copyright 2024 | SQRL Inc.<br></br>
          <br></br>
        </a>
      </div>
    </footer>
  );
}
