import logo from "../assets/ironSteam.png";
import { Link } from "react-router-dom";
import { UserRegister } from "./UserRegister";
import { UserLogin } from "./UserLogin";

export const Navbar = ({ setUserIsLogin }) => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="nav-Bar">
      <div className="logo-container">
        <Link to="/" style={linkStyle}>
          <div>Home</div>
        </Link>
        <img src={logo} alt="logo" className="mainLogo" />
        <Link to="about" style={linkStyle}>
          <div>About</div>
        </Link>
      </div>
      <div className="loginPlace">
        <UserRegister />
        <UserLogin setUserIsLogin={setUserIsLogin} />
      </div>
    </div>
  );
};
