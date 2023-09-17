import React, { useEffect, useState } from "react";
import "./Experiences.css";

const experiences = [
  {
    employer: "Calabrio, Inc.",
    title: "Associate Software Engineer - UI",
    employmentDates: "Oct 2021 - present",
    description:
      "Demonstrate proficiency in programming languages. Develop high-quality, tested software, engage in team activities, handle project tasks (design, coding, tests), support products, review and write documentation, and participate in customer issue resolution on-call rotation.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Material-UI",
      "AngularJS",
      "Dojo",
      "Terraform",
    ],
  },
  {
    employer: "Prime Digital Academy",
    title: "Graduate & Developer Mentor",
    employmentDates: "Mar 2021 - present",
    description: `Mentor, guide and support students in Prime's Full-Stack Software Engineering Program, leveraging expertise gained as a program graduate in JavaScript, HTML 5, CSS, React, jQuery, PostgreSQL, and Node.js.`,
    technologies: [
      `Solo Capstone Project: Pixels, a mood tracker app: Developed a full-stack mobile app to track mood reflections throughout the day. The reflection inquires what you were doing and who you were with so that we can establish patterns on how different relationships and activities can influence one's mood through charts and graphs.`,
      "Client Project: YourPath: Worked on a team of five Software Engineers to collaborate and build an Administrative application to easily recommend treatments to people seeking addiction/mental health aid.",
    ],
  },
  {
    employer: "Freelance Theater Artist",
    title: "Stage Manager & Performer",
    employmentDates: "May 2016 - present",
    description: `Lead production and performance teams through meetings, rehearsals and performances. Hub of communication between various departments and personnel. Collaborating closely with the Director to insure a safe environment while keeping the integrity of the Director's vision. Creating various ways to convey a story through body and voice. Collaborating with a Director and team on ways to enhance and provide clarity to a story - take in feedback to implement for next time.`,
    technologies: [],
  },
  {
    employer: "Orangetheory Fitness ",
    title: "Sales Associate",
    employmentDates: "Nov 2019 - Oct 2021",
    description: `Foster a safe, welcoming workout environment, support members, celebrate milestones, and engage in customer service with a focus on membership sales and administrative tasks.`,
    technologies: [],
  },
];

function Experiences() {
  const [experienceToDisplay, setExperienceToDisplay] = useState({});
  const [selectedSpanIndex, setSelectedSpanIndex] = useState(null);

  const handleExperienceClick = (experience, index) => {
    setExperienceToDisplay(experience);
    setSelectedSpanIndex(index);
  };

  return (
    <div className="experienceContainer">
      <div className="left">
        {experiences.map((experience, index) => (
          <div
            className="experienceBox"
            key={index}
            onClick={() => handleExperienceClick(experience, index)}
          >
            <button className={selectedSpanIndex === index ? 'selected' : 'btn-as-text'}>{experience.employer}</button>
          </div>
        ))}
      </div>
      <div className="right">
        <p className="italic-text">{experienceToDisplay?.employmentDates}</p>
        <p className="bold-text">{experienceToDisplay?.title}</p>
        <p>{experienceToDisplay?.description}</p>
      </div>
    </div>
  );
}

export default Experiences;
