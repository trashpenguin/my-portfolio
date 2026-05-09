import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="skills-section" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <iframe
              title="Focused Student with Laptop"
              className="sketchfab-embed"
              src="https://sketchfab.com/models/f1cbc7e1803e4dadb6626b24c2cf1921/embed?autostart=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&transparent=1"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title}</h1>
            <p className="skills-text-subtitle subTitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skill, i) => (
                <p key={i} className="skills-text subTitle">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
