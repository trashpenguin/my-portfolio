import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">© 2025 Francis Niño Moncada</p>
      </div>
    </Fade>
  );
}
