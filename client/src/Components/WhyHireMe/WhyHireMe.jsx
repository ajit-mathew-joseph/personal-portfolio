import React from "react";
import "./WhyHireMe.scss";
import hardWorking from "../../Assets/Icons/time-outline.svg";
import teamPlayer from "../../Assets/Icons/people-outline.svg";
import fullStack from "../../Assets/Icons/logo-react.svg";

function WhyHireMe(props) {
  return (
    <div className="whyHireMe">
      <h2 className="whyHireMe__main-title">WHY HIRE ME?</h2>
      <div className="whyHireMe__container">
        <div className="whyHireMe__sub-container">
          <img
            className="whyHireMe__logo"
            src={hardWorking}
            alt="Hard Working"
          />
          <div className="whyHireMe__text-container">
            <h3 className="whyHireMe__section-title">I work hard</h3>
            <p className="whyHireMe__description">
              I am filled with the burning desire to become a top-notch
              developer. I am willing to put in 110% effort to get there.
            </p>
            <p className="whyHireMe__description--two">
              I would put in the hours to make sure I could learn the skills
              needed to succeed.
            </p>
          </div>
        </div>

        <div className="whyHireMe__sub-container">
          <img className="whyHireMe__logo" src={teamPlayer} alt="Team Player" />
          <div className="whyHireMe__text-container">
            <h3 className="whyHireMe__section-title">I work well on teams</h3>
            <p className="whyHireMe__description">
              I have been working and achieving with teams since high school, such as
              being a member of the executive team of the top Undergraduate Society of UBC in 2019.
            </p>
            <p className="whyHireMe__description--two">
              I am a team player that works to put in my share of work and to
              communicate effectively and regularly.
            </p>
          </div>
        </div>

        <div className="whyHireMe__sub-container">
          <img
            className="whyHireMe__logo"
            src={fullStack}
            alt="A Full Stack Developer"
          />
          <div className="whyHireMe__text-container">
            <h3 className="whyHireMe__section-title">
              I'm a Full Stack Developer
            </h3>
            <p className="whyHireMe__description">
              React, Node, MongoDB, and Express are just some of the skills I
              would bring to the table.
            </p>
            <p className="whyHireMe__description--two">
              I have previously worked with Python and MySQL as well, and these
              skills would enable me to work on the front and back-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHireMe;
