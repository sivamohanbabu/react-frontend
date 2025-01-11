import { Link } from "react-router-dom";
import "./signup.css"; // Import the external CSS file for styling

const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-header">Signup</h1>
      <form className="signup-form">
        {/* Name Input */}
        <div className="input-group">
          <label htmlFor="name" className="input-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="input-field"
          />
        </div>

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

        {/* Signup Button */}
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>

      {/* Login Link */}
      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
