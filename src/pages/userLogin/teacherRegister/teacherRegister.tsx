import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signUpTeacher, auth } from "../../../firebase/firebaseconfig";
import "./teacherRegister.css";

const TeacherRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const isPasswordConfirmed = (password: any, confirmPassword: any) => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!isPasswordConfirmed(password, confirmPassword)) {
      alert("Passwords do not match!");
      return;
    }

    signUpTeacher(username, email, password, 0);
  };

  return (
    <div className="container-studentLogin">
      <div className="login-box">
        <h1>Student Login</h1>
        <form className="teacher-register-form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="input">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <input className="btn" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default TeacherRegister;
