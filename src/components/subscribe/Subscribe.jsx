import './subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <h2>Save time, save money!</h2>
            <p>Sign up and we'll send the best deals to you</p>
            <form className="subscribe">
                <input type="text" placeholder='Your email' required/>
                <button>Subscribe</button>
            </form>
        </div>
    );
}
 
export default Subscribe;