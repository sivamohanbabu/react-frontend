import { Link } from "react-router-dom";
import "./login.css"; // Import the external CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form className="login-form">
        {/* Email Input */}
        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input-field"
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input-field"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {/* Signup Link */}
      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
