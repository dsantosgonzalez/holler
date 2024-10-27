import React from 'react';
import "./Dashboard.css";
import MyMap from "./MyMap";
import axios from 'axios';

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            picture: null,
            description: "",
            severity: "Moderate",
            triggerRefresh: false
        }
    }

    togglePopup = () => {
        this.setState({ showPopup: !this.state.showPopup });
    }

    handlePictureChange = (event) => {
        this.setState({ picture: event.target.files[0] });
    }

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const { latitude, longitude } = await this.getCurrentLocation();
        const { picture, description, severity } = this.state;
    
        if (picture) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const pictureData = e.target.result;
                const reportData = {
                    latitude: latitude,
                    longitude: longitude,
                    image: pictureData,
                    description: description,
                    severity: severity
                }

                axios.post("http://localhost:8080/api/report", reportData)
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((err) => {
                        console.log(err)
                    });
                
                    this.setState({ triggerRefresh: !this.state.triggerRefresh });
                
            };
            reader.readAsDataURL(picture);
        }
    
        this.togglePopup();
        this.setState({ picture: null, description: null, severity: "Moderate" });
    }

    handleSeverityChange = (event) => {
        this.setState({ severity: event.target.value });
    }

    getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error("Geolocation is not supported by this browser."));
            }
        });
    };

    render() {
        return (
            <div>
                <button className="submit-report-button" onClick={this.togglePopup}>+</button>
                {this.state.showPopup && (
                    <div className="popup">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Picture (PNG, JPG):
                                <input required type="file" accept=".png .jpg .jpeg" onChange={this.handlePictureChange} />
                            </label>
                            <label>
                                Description:
                                <textarea required value={this.state.description} onChange={this.handleDescriptionChange} />
                            </label>
                            <label>
                                Severity:
                                <select value={this.state.severity} onChange={this.handleSeverityChange}>
                                    <option value="Critical">Critical</option>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Low">Low</option>
                                </select>
                            </label>
                            <br />
                            <div className="button-group">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={this.togglePopup}>Close</button>
                            </div>  
                        </form>
                    </div>
                )}
                <MyMap floodReport={this.state.floodReport} fireReport={this.state.fireReport} powerReport={this.state.powerReport} roadReport={this.state.roadReport} triggerRefresh={this.state.triggerRefresh} />
            </div>
        );
    }
}

export default Dashboard;