import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";

const Dashboard = () => {
    return (
        <div>
            <MyMap />
            <div className="dashboard-button-container">
                <h1 className="dashboard-main-title">Disaster dashboard.</h1>
                <Link to="/offerhelp" style={{ textDecoration: 'none', alignSelf: 'center'}}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <Link to="/needhelp" style={{ textDecoration: 'none', alignSelf: 'center'}}>
                    <button className="dashboard-button">Report a dangerous condition.</button>
                </Link>
            </div>
            {
            // <p className="dashboard-paragraph">TODO: map, image uploads, severity status, update notifications</p>
            }
        </div>
    );
}

export default Dashboard;