import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/shop">
                    Shop 
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/login">
                    Login
                </NavLink>
            </nav>
        </header>
     );
}

export default Header;