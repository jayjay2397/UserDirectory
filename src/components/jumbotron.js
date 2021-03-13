import React from "react";
import "./style.css";
function Jumbotron() {
    return (
    <div>
      <div className="jumbotron jumbotron-fluid" id="jumboTron">
        <div className="container">
          <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>User Directory</b></h1>
          <p className="lead">Search by first or last name or sort by selecting a title on the colomun.</p>
        </div>
      </div>
    </div>
    );
  }
  
  export default Jumbotron;
