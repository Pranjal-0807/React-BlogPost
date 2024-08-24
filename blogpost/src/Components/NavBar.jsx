import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="site-title">
          <Link to="/">BlogPost</Link>
        </div>
        <ul>
          <li>
            <Link to="/blogList">BlogList</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/newBlog">New Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
