import { Link } from "react-router-dom";

import logo from "../../assets/image/logo.png";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="no-logo"></img>
      </Link>
      <div className="options">
        <Link className="option" to="/">Home</Link>
        <Link className="option" to="/recipes">Recipes</Link>
      </div>
    </nav>
  );
}

export default NavBar;
