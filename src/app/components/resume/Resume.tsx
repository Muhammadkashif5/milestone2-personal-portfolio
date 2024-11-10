import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">
        Resume
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My personal journey
      </span>

      <div className="resume_container container grid">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Electrical Engineering",
              location: "Ziauddin University, Karachi",
              calender: "Present",
            },
            {
              title: "DAE In Electrical",
              location: "Pakistan Navy Polytechnic Institute, Karachi",
              calender: "2017 - 2019",
            },
            {
              title: "Matriculation",
              location: "F.G Boys Secondary School, Karachi",
              calender: "2012 - 2014",
            },
          ]}
        />

        <ResumeBox
          heading="Learning"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "Front-End Developer",
              location: "Governer House Sindh Karachi",
              calender: "Feburary 2024 - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
