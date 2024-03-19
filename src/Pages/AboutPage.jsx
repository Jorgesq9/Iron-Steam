import pcScreen from "../assets/PcScreen.png"
import comunity from "../assets/Comunity.png"
import release from "../assets/Release.png"

export const AboutPage = () => {
  return (
    <>
    <div className="article">
    <div >
        <h2 className="h2About">The best place to play games... and create them</h2>
        <div className="pAbout">
        <p><span className="green-point">ø</span>Online</p> <p><span className="blue-point">ø</span>Downloads</p>
        </div>
        <div className="quantity">
        <p>10,000</p>
        <p>15,500</p>
        </div>
    </div>
    </div>

    <div className="article2">
    <div className="h2article"> 
    <h2>Access Games Instantly</h2>
    <p className="p2article">Get access to our selected games made it by IronHacker's. Enjoy the exclusive deals</p>
    <div className="pcScreen">
    <img src={pcScreen} alt="Ironsteam" />
    </div>
    </div>
    </div>

    <div className="article3">
      <div className="h2article3">
    <h2>Join the Community</h2>
    <p className="p3article">Meet new gaming developers, join groups and more!</p>
    <div className="comunity">
    <img src={comunity} alt="Ironsteam" />
    </div>
    </div>
    </div>
    

    
    <div className="article4">
      <div className="h2article4">
    <h2>Release your Game</h2>
    <p className="p4article">We can provide the tools and services that help game developers to publish their games on IronSteam</p>
    <div className="release">
    <img src={release} alt="release" />
    </div>
    </div>
    </div>

    </>
  )
};
