import { Link } from "react-router-dom";

const Nav = (props) => {
  const { cartItems } = props;

  return (
    <nav className="nav-bar">
      <h2>Poké Pet Shop</h2>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li className="cart">
            <span class="material-icons-outlined">shopping_cart</span>
            {cartItems}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
