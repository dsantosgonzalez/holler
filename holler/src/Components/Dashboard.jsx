import React, {useState} from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";
import axios from 'axios';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [imageBase64, setImageBase64] = useState('');

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            description,
            image: imageBase64,
        };

        try {
            console.log(data);
            const response = await axios.post("http://localhost:8080/api/report", data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data.message);
            toggleModal();
        } catch (error) {
            console.error('It wont even send!:', error);
        }
    };

    return (
        <div>
            <MyMap />
            <div className="dashboard-button-container">
                <Link to="/offerhelp" style={{ textDecoration: 'none', alignSelf: 'center' }}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <button className="dashboard-button" onClick={toggleModal}>Report a dangerous condition.</button>
                <h1 className="dashboard-main-title">Disaster dashboard.</h1>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>&times;</span>
                        <h2>Report a Dangerous Condition</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Description:</label>
                            <textarea
                                rows="4"
                                cols="50"
                                placeholder="Describe the condition..."
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <label>Upload Image:</label>
                            <input type="file" onChange={handleImageChange} accept="image/*" />
                            <button type="submit" className="submit-button">Submit Report</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;