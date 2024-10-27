import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";
import cameraPic from "../assets/icons8-camera-48.png"
import floodPic from "../assets/flood.png"
import roadBlocking from "../assets/block.png"
import firePic from "../assets/fire.png"
import electricPic from "../assets/power_outage.png"

const floodReport =() =>{
    console.log("flood report pressed");
}
const fireReport =() =>{
    console.log("fire report pressed");
}
const cameraSubmit =() =>{
    console.log("camera button pressed");
}
const powerReport =() =>{
    console.log("power report pressed");
}
const roadReport =() =>{
    console.log("road report pressed");
}

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
                
                
                    <button className = "Flood-button" onCLick = {floodReport}>
                    <img src={floodPic} className="button-Icon" alt="flood" />
                    </button>
                
                
                    <button className = "fire-button" onClick = {fireReport}>
                    <img src={firePic} className="button-Icon" alt="fire" />
                    </button>
                
                
                    <button className = "Camera-button" onClick = {cameraSubmit}>
                    <img src={cameraPic} className="button-Icon" alt="fire" />
                    </button>
               
                
                    <button className = "power-button" onClick = {powerReport}>
                    <img src={electricPic} className="button-Icon" alt="power" />
                    </button>
                
                
                
                    <button className= "RoadBlock-button" onClick = {roadReport}>
                    <img src={roadBlocking} className="button-Icon" alt="roadblock" />
                    </button>
                
                
            </div>
            {
            // <p className="dashboard-paragraph">TODO: map, image uploads, severity status, update notifications</p>
            }
           
        </div>
    );
}

export default Dashboard;