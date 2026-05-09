import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1>Proficiency</h1>
          {techStack.experience.map((exp, i) => (
            <div key={i} className="skill">
              <p>{exp.Stack}</p>
              <div className="meter">
                <span style={{width: exp.progressPercentage}}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
