import React from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank").focus();
  }

  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div className="projects-section" id="projects">
        <div className="projects-inner">
          {/* Section header */}
          <div className="projects-header">
            <h2 className="projects-title">{bigProjects.title}</h2>
            <div className="projects-divider" />
          </div>

          {/* Project rows */}
          <div className="projects-list">
            {bigProjects.projects.map((project, i) => (
              <div className="project-row" key={i}>
                {/* Left: number + name + tags */}
                <div className="project-row-left">
                  <span className="project-row-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="project-row-name">{project.projectName}</h3>
                  {project.technologies && (
                    <div className="project-row-tags">
                      {project.technologies.map((tech, j) => (
                        <span className="project-row-tag" key={j}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: description + links + image */}
                <div className="project-row-right">
                  {project.image && (
                    <div className="project-row-image">
                      <img src={project.image} alt={project.projectName} />
                    </div>
                  )}
                  <div className="project-row-body">
                    <p className="project-row-desc">{project.projectDesc}</p>
                    {project.footerLink && project.footerLink.length > 0 && (
                      <div className="project-row-links">
                        {project.footerLink.map((link, k) => (
                          <span
                            key={k}
                            className="project-row-link"
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="project-row-divider" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
