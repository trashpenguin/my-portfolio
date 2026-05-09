import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-top-divider" />

          <div className="contact-body">
            <span className="contact-label">Get in touch</span>
            <h2 className="contact-heading">{contactInfo.title}</h2>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-links">
              {contactInfo.number && (
                <a className="contact-link" href={"tel:" + contactInfo.number}>
                  <i className="fas fa-phone"></i>
                  {contactInfo.number}
                </a>
              )}
              <a
                className="contact-link"
                href={"mailto:" + contactInfo.email_address}
              >
                <i className="fas fa-envelope"></i>
                {contactInfo.email_address}
              </a>
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>
    </Fade>
  );
}
