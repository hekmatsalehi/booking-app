import axios from "axios";
import { useContext, useState } from "react";
import { AuthContex } from "../../contex/AuthContex";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContex);

  const handleChange = (e) => {
    setCredentials( (prev) => ({
        ...prev, [e.target.id]: e.target.value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    try {
        const response = await axios.post("/auth/login", credentials);
        dispatch({type: "LOGIN_SUCCESS", payload: response.data});
    } catch (err) {
        dispatch({type: "LOGIN_FAIL", payload: err.response.data})
    }
  }

  console.log(user)
  return (
    <div className="login">
      <div className="login-container">
        <h2>Log in to your account</h2>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="login-input"
          onChange={handleChange}
          
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="login-input"
          onChange={handleChange}
          
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <div className="login-error">{error && <span>{error.message}</span>}</div>
      </div>
    </div>
  );
};

export default Login;
