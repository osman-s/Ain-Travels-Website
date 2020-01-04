import React, { Component } from "react";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }} className="app">
        {/* <Toolbar ToggleDrawer={this.ToggleDrawer} /> */}
        <main style={{ marginTop: "10vh" }}>
          <h1 className="hello">About</h1>
          <div>
            Ainul Haramain took its start in 2005 with Hajj taking 50 passengers
            in the first year with a goal of serving hujjaj from North America.
            Within a few years Ainul Haramain was licisened for Umrah. As the
            years went by Ainul Haramain has perfected there Umrah Groups to
            serve the Guest of Allah all year around during seasons such as
            Thanksgiving, Winter Breaks in December and February, spring break
            in March and April, and packages that focus on last 10 nights of
            Ramadan in Makkah. Our main goal is to provide quality service to
            our pilgrims. Our packages also focus on Touring Aqsa with Umrah two
            times during the year in February and November. Today Ainul Haramain
            serves more than 300 passengers during Hajj, over 500 passengers in
            our Umrah groups and over 1500 individual passenger for Umrah during
            the year. Today Ainul Haramain Travel is amongst the leading
            companies for Hajj and Umrah in North America. Ainul Haramain is an
            authorized company by the Ministry of Hajj and Umrah to serve
            pilgrims in the United States of America.
          </div>
        </main>
      </div>
    );
    // }
  }
}

export default About;
