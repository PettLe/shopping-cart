import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h2>OBLADIII</h2>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
