import React from 'react';
import "./Dashboard.css";
import MyMap from "./MyMap";

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
            roadReport: true,
            showPopup: false,
            picture: null,
            description: ""
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

    handleSubmit = (event) => {
        event.preventDefault();
        // GET YOUR DATA HERE
        console.log('Picture:', this.state.picture);
        console.log('Description:', this.state.description);
        this.togglePopup();
        this.setState({picture: null})
        this.setState({description: null})
    }

    cameraSubmit() {
        console.log("Hello");
    }

    render() {
        return (
            <div>
                <button className="submit-report-button" onClick={this.togglePopup}>+</button>
                {this.state.showPopup && (
                    <div className="popup">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Picture:
                                <input type="file" onChange={this.handlePictureChange} />
                            </label>
                            <label>
                                Description:
                                <textarea value={this.state.description} onChange={this.handleDescriptionChange} />
                            </label>
                            <br />
                            <div className="button-group">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={this.togglePopup}>Close</button>
                            </div>  
                        </form>
                    </div>
                )}
                <MyMap floodReport={this.state.floodReport} fireReport={this.state.fireReport} powerReport={this.state.powerReport} roadReport={this.state.roadReport} />
            </div>
        );
    }
}

export default Dashboard;