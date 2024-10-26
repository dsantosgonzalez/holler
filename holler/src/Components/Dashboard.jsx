import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";

const Dashboard = () => {
    return (
        <div>
            <div className="dashboard-button-container">
                <h1 className="dashboard-main-title">Disaster Dashboard</h1>
                <Link to="/offerhelp" style={{ textDecoration: 'none', alignSelf: 'center'}}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <Link to="/needhelp" style={{ textDecoration: 'none', alignSelf: 'center'}}>
                    <button className="dashboard-button">Need help or want to report something?</button>
                </Link>
            </div>
            <MyMap />
            {
            // <p className="dashboard-paragraph">TODO: map, image uploads, severity status, update notifications</p>
            }
        </div>
    );
}

export default Dashboard;