import React from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  return (
    <Fade left duration={1000}>
      <div className="edu-row">
        {school.logo && (
          <div className="edu-logo-wrap">
            <img
              src={school.logo}
              alt={school.schoolName}
              className="edu-logo"
            />
          </div>
        )}

        <div className="edu-body">
          <h3 className="edu-school">{school.schoolName}</h3>
          <span className="edu-degree">{school.subHeader}</span>
          <span className="edu-duration">{school.duration}</span>
          <p className="edu-desc">{school.desc}</p>
          {school.descBullets && (
            <ul className="edu-bullets">
              {school.descBullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="edu-row-divider" />
      </div>
    </Fade>
  );
}
