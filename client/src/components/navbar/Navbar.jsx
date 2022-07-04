import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css'

const Navbar = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo-wrapper">
                    <h2 className="logo">SKY Booking</h2> 
                </Link>
                  
                <div className="nav-items">
                    { user ? <>
                    <h3>Hi, {user.username}</h3>
                    <button className="nav-button">Logout</button>
                    </> : <>
                    <button className="nav-button">Signup</button>
                    <button className="nav-button">Login</button>
                    </>}
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;