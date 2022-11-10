import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { logIn, auth } from "../../../firebase/firebaseconfig";
import "./studenLogin.css";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const checkDetails = (e: any) => {
    e.preventDefault();
    logIn(email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading]);

  return (
    <div className="container-studentLogin">
      <div className="login-box">
        <h1>Student Login</h1>
        <form onSubmit={checkDetails}>
          <div className="input">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input className="btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
