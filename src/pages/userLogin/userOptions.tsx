import React from "react";
import { useNavigate } from "react-router-dom";
import "./userOptions.scss";

const UserOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="Container">
      <div className="Student">
        <h1 className="Student-Text">Student</h1>
        <input
          onClick={() => navigate("/studentlogin")}
          className="Button"
          type="button"
          value="Login"
        />
        <input
          onClick={() => navigate("/studentregister")}
          className="Button"
          type="button"
          value="Register"
        />
      </div>
      <div className="Teacher">
        <h1 className="Teacher-Text">Teacher</h1>
        <input
          onClick={() => navigate("/teacherlogin")}
          className="Button"
          type="button"
          value="Login"
        />
        <input
          onClick={() => navigate("/teacherregister")}
          className="Button"
          type="button"
          value="Register"
        />
      </div>
    </div>
  );
};

export default UserOptions;
