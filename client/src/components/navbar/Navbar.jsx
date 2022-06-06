import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <h2 className="logo">SKY Booking</h2>    
                <div className="nav-items">
                    <button className="nav-button">Signup</button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;