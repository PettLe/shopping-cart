import { Link } from "react-router-dom";

const Nav = (props) => {
  const { cartItems } = props;

  return (
    <nav className="nav-bar">
      <h1>Poké Pet Shop</h1>
      <ul>
        <Link to="/shopping-cart">
          <li>Home</li>
        </Link>
        <Link to="/shopping-cart/shop">
          <li>Shop</li>
        </Link>
        <Link to="/shopping-cart/cart">
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
