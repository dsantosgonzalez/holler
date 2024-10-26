import React from 'react';
import "./Sidebar.css";

export default class Sidebar extends React.Component {
   
   constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
      };
    }
  
    toggleSidebar = () => {
      this.setState({ collapsed: !this.state.collapsed });
    };

   render() {
      const { collapsed } = this.state;
  
      return (
        <div className={`sidebar ${collapsed ? 'open' : 'collapsed'}`}>
          <button onClick={this.toggleSidebar} className="toggle-button">
            {collapsed ? '←' : '→'}
          </button>
          {collapsed && (
            <>
              <h3>Recent Reports</h3>
              <ul>
                <li>HELLO</li>
              </ul>
            </>
          )}
        </div>
      );
    }
}
