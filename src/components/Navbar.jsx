import logo from "../assets/ironSteam.png"
import {Link} from "react-router-dom"

export const Navbar = () => {

  const linkStyle = {
    color: "white",
    textDecoration: "none"
}

  return(
  
  
  <div className="nav-Bar">
    <div className="logo-container">
     <Link to="/" style={linkStyle}><div>Home</div></Link>
     <img src={logo} alt="logo" className="mainLogo"/>
     <Link to="about" style={linkStyle}><div>About</div></Link>
      </div>
    </div>
  )
};