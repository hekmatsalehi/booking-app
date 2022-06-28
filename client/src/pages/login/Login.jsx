import './login.css';


const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <input type="text" placeholder='username' id="username" className="login-input"/>
                <input type="text" placeholder='email' id="email" className="login-input"/>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default Login;