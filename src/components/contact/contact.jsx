import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactor" >
        <main style={{ marginTop: "10vh" }}>
          {/* <h1 className="">Contact</h1> */}
          <div className="office">
            <div className="branch">Manhattan Office</div>
            <div className="address pt-1">747 3rd Ave Regus Ground Floor</div>
            <div className="address">New York, NY 10017</div>
            <div className="phone">
              <a href="tel:(718)-505-0705">(718)-505-0705</a>
            </div>
          </div>
          <div className="contact">
            <div className="title">Marketing and Group Director</div>
            <div className="name">Haroon Hasan</div>
            <div className="phone">
              <a href="tel:(212) 380-6100">(212) 380-6100</a>
            </div>
          </div>
          <div className="contact">
            <div className="title">Group Ticketing</div>
            <div className="name">Samiuddin Hasan</div>
            <div className="phone">
              <a href="tel:(718) 581-8906">(718) 581-8906</a>
            </div>
          </div>
          <div className="contact">
            <div className="title">Ticketing Specialist</div>
            <div className="name">Adil Abbas</div>
            <div className="phone">
              <a href="tel:(718) 412-8586">(718) 412-8586</a>
            </div>
          </div>
          <div className="contact">
            <div className="title">Sales Specialist</div>
            <div className="name">Nauman Rashid</div>
            <div className="phone">
              <a href="tel:(347) 596-0336">(347) 596-0336</a>
            </div>
            <div className="phone">
              <a href="tel:(212) 695-5200">(212) 695-5200</a>
            </div>
          </div>
          <div className="office pt-3">
            <div className="branch">Atlanta Office</div>
            <div className="address pt-1">669 Roswell Street</div>
            <div className="address">Maritta, GA 30060</div>
          </div>
          <div className="contact">
            <div className="title">Group Director</div>
            <div className="name">Mushtaque Khan</div>
            <div className="phone">
              <a href="tel:(678) 593-6262">(678) 593-6262</a>
            </div>
          </div>
        </main>
      </div>
    );
    // }
  }
}

export default Contact;
