import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;
  return (
    <div className="education-section" id="education">
      <div className="education-inner">
        <div className="education-header">
          <h2 className="education-heading">Education</h2>
          <div className="education-divider" />
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
