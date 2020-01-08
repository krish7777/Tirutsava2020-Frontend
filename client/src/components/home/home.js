import React from "react";
import "./home.css";
import Logo from "./logo.png";
import Image from "./ppng.png";
import { MDBContainer } from "mdbreact";

export default function home() {
  return (
    <div style={{ maxHeight: "100vh" }} className="body-home">
      <div>
        <div className="night">
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>
        <MDBContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={Logo}
            style={{
              backgroundSize: "cover",
              position: "absolute",
              left: "0",
              right: "0",
              top: "10px",
              zIndex: "1",
              width: "100%"
            }}
          />
        </MDBContainer>

        <img
          style={{
            backgroundSize: "cover",
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "0",
            height: "200px",
            zIndex: "0",
            width: "100%"
          }}
          src={Image}
        />
      </div>
    </div>
  );
}
