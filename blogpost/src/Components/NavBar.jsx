import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="site-title">BlogPost</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
