import React from "react";
import "./introanimation.css";
import "./particles.css";
import "./animation.css";
import CustomButton from "../CustomButton/CustomButton";
import { PopupButton } from "react-calendly";

const IntroAnimation = () => (
  <div className="intro-animation" id="intro">
    <div
      className="animation-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div
        className="mihailo-maksa"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="hi-mihailo-maksa">
          Hi, I'm <span className="mihailo-label">Mihailo!</span>
        </h1>
        <p className="job-title">Senior Solidity Smart Contract Engineer</p>

        <div className="button-container">
          <PopupButton
            url="https://calendly.com/mihailo-maksa/30min"
            rootElement={document.getElementById("root")}
            type="button"
            className="custom-button outline-button transparent-outline-button"
            text="Let's Talk"
          />
          <CustomButton
            type="button"
            onClick={() => window.open("/Resume.pdf", "_blank")}
          >
            Resume
          </CustomButton>
        </div>
      </div>

      <div className="night first-animation">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night second-animation">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>
    </div>
  </div>
);

export default IntroAnimation;
