import React, {useState} from 'react';
import "./Dashboard.css";
import React from 'react';
import MyMap from "./MyMap";
import cameraPic from "../assets/icons8-camera-48.png"
import floodPic from "../assets/flood.png"
import roadBlocking from "../assets/block.png"
import firePic from "../assets/fire.png"
import electricPic from "../assets/power_outage.png"

/*
<div className="dashboard-button-container">
                <Link to="/offerhelp" style={{ textDecoration: 'none'}}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <Link to="/needhelp" style={{ textDecoration: 'none'}}>
                    <button className="dashboard-button">Need help or want to report something?</button>
                </Link>
            </div>
*/

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            floodReport: true,
            fireReport: true,
            powerReport: true,
            roadReport: true
        }
    }

    cameraSubmit() {
        console.log("Hello");
    }

    render() {
        return (
            <div>
                <MyMap floodReport={this.state.floodReport} fireReport={this.state.fireReport} powerReport={this.state.powerReport} roadReport={this.state.roadReport} />
                <div className="buttonBar">
                    <button className = "Flood-button" onClick = {() => this.setState({ floodReport: !this.state.floodReport })}>
                    <img src={floodPic} className="button-Icon" alt="flood" />
                    </button>
                
                    <button className = "fire-button" onClick = {() => this.setState({ fireReport: !this.state.fireReport })}>
                    <img src={firePic} className="button-Icon" alt="fire" />
                    </button>
                
                    <button className = "Camera-button" onClick = {() => this.cameraSubmit()}>
                    <img src={cameraPic} className="button-Icon" alt="fire" />
                    </button>
                
                    <button className = "power-button" onClick = {() => this.setState({ powerReport: !this.state.powerReport })}>
                    <img src={electricPic} className="button-Icon" alt="power" />
                    </button>
                
                    <button className= "RoadBlock-button" onClick = {() => this.setState({ roadReport: !this.state.roadReport })}>
                    <img src={roadBlocking} className="button-Icon" alt="roadblock" />
                    </button>
                </div>           
            </div>
        );
    }
}

export default Dashboard;