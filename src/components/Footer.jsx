import instagram from "../assets/instagram.png"
import X from "../assets/X.png"
export const Footer = () => {
    
    
    
 return (   
    <footer>

        <p className="footer-txt">© 2024 IronSteam. All rights reserved.</p>
        <div className="Social-Media">
            <div className="SocilM-container">
            <img src={instagram} alt="instLogo" className="instagram"/>
            </div>
            <p className="instagram-txt">@IronSteam</p>
            <div className="SocilM-container">
            <img src={X} alt="XLogo" className="X"/>
            </div>
            <p className="instagram-txt">@IronSteamX</p>
        </div>
        
    </footer>
 )
}

