import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className="button">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
