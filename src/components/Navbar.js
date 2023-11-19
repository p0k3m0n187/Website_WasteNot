import image from "../images/logo.png";
import "../Pages/Design/navbar.css";

export default function Navbar() {
    return <nav className="navbar">
        <a href="/" className="site-title"><img src={image} alt="NavBar logo"/>WasteNot</a>
        <ul>
            <li className="buttons">
                <button type="button" class="faq">FAQ</button>
            </li>
            <li>
                <button type="button" class="aboutus">About Us</button>
            </li>
        </ul> 
    </nav>
}