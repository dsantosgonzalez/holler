import React, {useState} from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import MyMap from "./MyMap";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Handle description input
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    // Handle image upload
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, you can handle the image and description upload
        console.log("Description:", description);
        console.log("Image:", image);

        // Close the modal after submission
        toggleModal();
    };

    return (
        <div>
            <MyMap />
            <div className="dashboard-button-container">
                <h1 className="dashboard-main-title">Disaster dashboard.</h1>
                <Link to="/offerhelp" style={{ textDecoration: 'none', alignSelf: 'center' }}>
                    <button className="dashboard-button">Able to help?</button>
                </Link>
                <button className="dashboard-button" onClick={toggleModal}>Report a dangerous condition.</button>
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