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
                    <Link to="/cart">

                    </Link>
                </li>
                <li></li>
                <li></li>

            </ul>
            {/* mobile view menu (hamburger) */}
        </nav>
    )
}

export default NavBar
