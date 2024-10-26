import React from 'react';
import "./Sidebar.css";

export default class Sidebar extends React.Component {

   render() {
      return (
         <div className="sidebar">
        <h3>Recent Reports</h3>
        <ul>
          <li>Power outage at Main St</li>
          <li>Flooding at Oakwood Ave</li>
          <li>Roadblock near Park Blvd</li>
        </ul>
      </div>
      )
   }
}
