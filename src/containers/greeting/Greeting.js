import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import manOnTable from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-hero">
          <div className="greeting-hero-inner">
            <div className="greeting-content">
              <span className="greeting-label">
                BS Information Technology &nbsp;|&nbsp; Certified Google IT
                Support Professional
              </span>
              <h1 className="greeting-text">{greeting.subTitle}</h1>
              <div className="greeting-actions">
                <Button text="Hire me" href="#contact" />
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="greeting-resume-link"
                >
                  Resume
                </a>
              </div>
              <SocialMedia />
            </div>

            <div className="greeting-illustration">
              <img
                src={manOnTable}
                alt="Developer working"
                className="greeting-illustration-img"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
