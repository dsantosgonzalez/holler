import logo from '../assets/speaking-head.png';
import { Link } from 'react-router-dom';
import "./WelcomeMessage.css";

const WelcomeMessage = () => {
    return (
      <div>
        <h1 className="wm-main-title">holler</h1>
        <p className="wm-paragraph">a tool for local governments during natural disasters</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/dashboard" style={{ textDecoration: 'none'}}>
            <button className="wm-button">Access the disaster dashboard</button>
        </Link>
      </div>
    );
  }

export default WelcomeMessage;