import React from 'react';
import "./Sidebar.css";
import axios from 'axios';

export default class Sidebar extends React.Component {
   
   constructor(props) {
      super(props);
      this.state = {
         collapsed: true,
         powerTotal: 0,
         floodTotal: 0,
         fireTotal: 0,
         blockTotal: 0
      };
   }
   
   componentDidMount() {
      /*
      axios.get("http://localhost:8080/api/totals/power_outages")
      .then(res => {
        const powerTotal = res.data;
        this.setState(({ powerTotal }));
      }).catch(error => {
        console.log(error.response);
      });

      axios.get("http://localhost:8080/api/totals/fires")
      .then(res => {
        const fireTotal = res.data;
        this.setState(({ fireTotal }));
      }).catch(error => {
        console.log(error.response);
      });

      axios.get("http://localhost:8080/api/totals/flooding")
      .then(res => {
        const floodTotal = res.data;
        this.setState(({ floodTotal }));
      }).catch(error => {
        console.log(error.response);
      });

      axios.get("http://localhost:8080/api/totals/blocked_road")
      .then(res => {
        const blockTotal = res.data;
        this.setState(({ blockTotal }));
      }).catch(error => {
        console.log(error.response);
      });
      */

      axios.all([
         axios.get("http://localhost:8080/api/totals/power_outages"),
         axios.get("http://localhost:8080/api/totals/fires"),
         axios.get("http://localhost:8080/api/totals/flooding"),
         axios.get("http://localhost:8080/api/totals/blocked_road")
      ]).then(axios.spread((res_power, res_fire, res_flood, res_block) => {
         
         const powerTotal = res_power.data;
         const fireTotal = res_fire.data;
         const floodTotal = res_flood.data;
         const blockTotal = res_block.data

         this.setState(({powerTotal}));
         this.setState(({fireTotal}));
         this.setState(({floodTotal}));
         this.setState(({blockTotal}));
      })).catch(error => {
         console.log(error.response);
      })
   }
   
  
   toggleSidebar = () => {
      this.setState({ collapsed: !this.state.collapsed });
   };

   render() {
      const { collapsed } = this.state;
  
      return (
        <div className={`sidebar ${collapsed ? 'collapsed' : 'open'}`}>
          <div className={`toggle-button ${collapsed ? 'collapsed' : 'open'}`} onClick={this.toggleSidebar}>
            {collapsed ? '→' : '←'}
          </div>
          {!collapsed && (
            <>
              <h1>Reports</h1>
               <div style={{textAlign: 'left'}}>
                  <p className='report-stats'>⚡️ <strong>{this.state.powerTotal}</strong> reported power outages</p>
                  <p className='report-stats'>🔥 <strong>{this.state.fireTotal}</strong> reported fires</p>
                  <p className='report-stats'>🌊 <strong>{this.state.floodTotal}</strong> reports of flooding</p>
                  <p className='report-stats'>🚧 <strong>{ this.state.blockTotal }</strong> reports of blocked roads</p>
               </div>
            </>
          )}
        </div>
      );
    }
}
