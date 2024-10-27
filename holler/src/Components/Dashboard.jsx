import "./Dashboard.css";
import React from 'react';
import MyMap from "./MyMap";
import plus from "../assets/plus-50.png"

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
                    <button className = "Camera-button" onClick = {() => this.cameraSubmit()}>
                    <img src={plus} className="button-Icon" alt="fire" />
                    </button>
                </div>           
            </div>
        );
    }
}

export default Dashboard;