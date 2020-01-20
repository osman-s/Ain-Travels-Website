import React from "react";
import "./hajj.css";

class Hajj extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }} className="app">
        <main style={{ marginTop: "10vh" }}>
          <h1 className="hello">Hajj</h1>
          <div className="cards">
            <div className="card-container">
              <div className="card">
                <div className="card-title">Package Name</div>
                <div className="card-details">Package Details</div>
                <div className="package-price">Package Price</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="card-title">Package Name</div>
                <div className="card-details">Package Details</div>
                <div className="package-price">Package Price</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="card-title">Package Name</div>
                <div className="card-details">Package Details</div>
                <div className="package-price">Package Price</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="card-title">Package Name</div>
                <div className="card-details">Package Details</div>
                <div className="package-price">Package Price</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
    // }
  }
}

export default Hajj;
