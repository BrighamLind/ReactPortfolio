import React from "react";
import profilePicture from "../../../static/assets/images/bio/Cali.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <h1 className="about-greeting">Hi there!</h1>
        <p className="right-column-text-indent">
          My innate fascination with engineering leads me to continually
          simplify, streamline, and refactor again and again. This workflow
          gives crucial structure in regards to the guiding principles in my
          life such as consistent personal development.
        </p>
        <p className="right-column-text-indent">
          With these guiding principles, I strive to give my best to everyone
          around me and constantly be a positive influence in the lives of
          others. I value hard work, service, and am highly driven.
        </p>
        <p className="right-column-text-indent">
          In regards to the future, I aspire to work on the cutting edge of
          innovation and development and have my sights set on being a pioneer
          in the holographic and medical industries by furthering current
          development and integrating machine learning.
        </p>
      </div>
    </div>
  );
}
