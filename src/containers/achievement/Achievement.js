import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="achievement-heading">{achievementSection.title}</h1>
            <p className="achievement-subtitle subTitle">
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
