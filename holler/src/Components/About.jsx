import './About.css';

const About = () => {
    return (
        <div>
            <h1 className="about-main-title">About holler</h1>
            <p className="about-paragraph">
                holler is a hurricane preparation and relief tool serves as a 
                centralized platform for citizens and local/state governments 
                to document and visualize hurricane impacts in real time. 
                Users can upload images of hurricane-related issues—such as 
                downed power lines, water outages, blocked roads, structural damage, 
                sinkholes, gas leaks, hazardous debris, or stranded individuals—which are then 
                categorized and mapped. 
            </p>
            <p className="about-paragraph">
                A map interface displays these reports as markers, 
                allowing users to click for images and additional details at specific locations. 
                For governments, this provides a high-resolution view of critical areas, facilitating 
                swift, targeted relief efforts and resource allocation based on reported damage and hazard density.
            </p>
            <p className="about-paragraph">
                holler was created by a team of developers at the University of Florida.
            </p>
        </div>
    );
}

export default About;