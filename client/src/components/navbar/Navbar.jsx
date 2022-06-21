import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo-wrapper">
                    <h2 className="logo">SKY Booking</h2> 
                </Link>   
                <div className="nav-items">
                    <button className="nav-button">Signup</button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;