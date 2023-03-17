import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";


const Navbar = ({ title = "Contacto" }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/">
          <h2 className="navbar-brand">{title}</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/mycontacts">
                    <h5 className="nav-link">All Contacts</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create">
                    <h5 className="nav-link">Create</h5>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setUser(null);
                    localStorage.clear();
                    toast.success("Logged out.");
                    navigate("/login", { replace: true });
                  }}
                >
                  <button className="btn btn-danger">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <h5 className="nav-link">Login</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <h5 className="nav-link">Register</h5>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
