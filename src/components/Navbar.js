import image from "../images/logo.png";
import "../style.css";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"><img src={image} width={170} height={140} alt="NavBar logo"/>WasteNot</a>
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