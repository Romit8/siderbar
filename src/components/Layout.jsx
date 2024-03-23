import React from "react";
import "./Layout.css"; 

class Layout extends React.Component {
  handleRandomGenerationClick = () => {
    alert("Navigating to Random Generation page");
  };

  render() {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <nav className="navbar navbar-expand-sm  list ">
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/home" onClick={this.handleRandomGenerationClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about" onClick={this.handleRandomGenerationClick}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/random" onClick={this.handleRandomGenerationClick}>Random Page</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-10">
            <div className="bg-image">
              <h1>Random Generation Page</h1>
              <p>At this time try to implement the layout</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout; 
