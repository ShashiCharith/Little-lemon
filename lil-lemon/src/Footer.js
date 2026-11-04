import logo from './assets/Logo.svg';
function Footer(){
    return(
        <footer className="footer">
            <p>© 2024 Lil Lemon. All rights reserved.</p>
            <img src={logo} alt="Little Lemon Logo" />
            <nav>
                <ul>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer