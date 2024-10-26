import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";
import camLogo from "./camera-logo.jpg"
import flowLogo from "./Water-flow.png"
import blockLogo from "./road-block.jpg"

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
                <Link to="/submitPhoto" style={{textDecoration: 'none'}}>
                    <button className = "Camera-button">
                    <img src={camLogo} className="button-Icon" alt="camera" />
                    </button>
                </Link>
                <Link to="/showFlood" style = {{textDecoration: 'none'}}>
                    <button className = "Flood-button">
                    <img src={flowLogo} className="button-Icon" alt="flood" />
                    </button>
                </Link>
                <Link to="/showRoadBlock" style={{textDecoration: 'none'}}>
                    <button className= "RoadBlock-button">
                    <img src={blockLogo} className="button-Icon" alt="roadblock" />
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