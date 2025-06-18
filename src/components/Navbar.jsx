import { Link } from "react-router-dom";
import "../style.css";
import { useState } from "react"; // useState-ը toggle-ի համար

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    AG Solar

                </Link>
            </div>
            <div className="burgerMenu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`listContainer ${isMenuOpen ? "active" : ""}`}>
                <ul className="listItem">
                    <li>
                        <Link to="/about" onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={toggleMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/pages" onClick={toggleMenu}>
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/trade" onClick={toggleMenu}>
                            Trade
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}