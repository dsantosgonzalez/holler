import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";
import cameraPic from "../assets/icons8-camera-48.png"
import floodPic from "../assets/flood.png"
import roadBlocking from "../assets/block.png"
import firePic from "../assets/fire.png"
import electricPic from "../assets/power_outage.png"
const Dashboard = () => {
    return (
        <div>
            <h1 className="dashboard-main-title">Disaster Dashboard</h1>
            <div className="dashboard-button-container">
                <Link to="/offerhelp" style={{ textDecoration: 'none'}}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <Link to="/needhelp" style={{ textDecoration: 'none'}}>
                    <button className="dashboard-button">Need help or want to report something?</button>
                </Link>
            </div>
            <MyMap />
            <div className="buttonBar">
                
                <Link to="/showFlood" style = {{textDecoration: 'none'}}>
                    <button className = "Flood-button">
                    <img src={floodPic} className="button-Icon" alt="flood" />
                    </button>
                </Link>
                <Link to="/submitPhoto" style={{textDecoration: 'none'}}>
                    <button className = "fire-button">
                    <img src={firePic} className="button-Icon" alt="fire" />
                    </button>
                </Link>
                <Link to="/submitPhoto" style={{textDecoration: 'none'}}>
                    <button className = "Camera-button">
                    <img src={cameraPic} className="button-Icon" alt="fire" />
                    </button>
                </Link>
                <Link to="/submitPhoto" style={{textDecoration: 'none'}}>
                    <button className = "power-button">
                    <img src={electricPic} className="button-Icon" alt="power" />
                    </button>
                </Link>
                
                <Link to="/showRoadBlock" style={{textDecoration: 'none'}}>
                    <button className= "RoadBlock-button">
                    <img src={roadBlocking} className="button-Icon" alt="roadblock" />
                    </button>
                </Link>
                
            </div>
            {
            // <p className="dashboard-paragraph">TODO: map, image uploads, severity status, update notifications</p>
            }
           
        </div>
    );
}

export default Dashboard;