import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../../firebase/firebaseconfig";
import "./home.css";

const Home = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/useroptions");
  };

  const doLogOut = () => {
    logOut();
  };

  return (
    <div className="container-home">
      <nav id="navbar">
        <ul className="pask">
          <li>
            <img src="assets/images/logo.png" className="logo" alt="logo" />
          </li>
          <ul>
            <li>
              <button className="mainnav-btn">Home</button>
            </li>
            <li>
              <button className="mainnav-btn">Explore</button>
            </li>
            <li>
              <button className="mainnav-btn">Pricing</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="sec-btn">Create</button>
            </li>
            {!user ? (
              <li>
                <button className="sec-btn" onClick={goToLogIn}>
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button className="sec-btn" onClick={doLogOut}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
