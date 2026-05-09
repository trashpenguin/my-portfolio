import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="experience-section" id="experience">
        <div className="experience-inner">
          <div className="experience-header">
            <h2 className="experience-title">Experience</h2>
            <div className="experience-divider" />
          </div>

          <div className="experience-list">
            {workExperiences.experience.map((card, i) => (
              <div className="experience-row" key={i}>
                {/* Left: logo + company + role */}
                <div className="experience-row-left">
                  <div className="experience-logo-wrap">
                    <img
                      src={card.companylogo}
                      alt={card.company}
                      className="experience-logo"
                    />
                  </div>
                  <div>
                    <h3 className="experience-company">{card.company}</h3>
                    <span className="experience-role">{card.role}</span>
                  </div>
                </div>

                {/* Right: date + description */}
                <div className="experience-row-right">
                  <span className="experience-date">{card.date}</span>
                  <p className="experience-desc">{card.desc}</p>
                  {card.descBullets && (
                    <ul className="experience-bullets">
                      {card.descBullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="experience-row-divider" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
