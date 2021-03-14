import '../styles/NavBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>Shopping cart</h2>
            </div>


            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart
                            <span className="cartlogo__badge">0</span>
                        </span>


                        {/*  */}
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li></li>

            </ul>
            {/* mobile view menu (hamburger) */}
            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar
