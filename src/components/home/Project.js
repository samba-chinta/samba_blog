import React from "react";

import Card from "../UI/Card";
import ProjectHolder from "./ProjectHolder";
import classes from "./project.module.css";

const projects = [
  {
    title: "Query-based Application",
    description:
      "A project which helps the student who are unable to raise their questions and doubts directly, can ask their questions in this website and can get the answers to their questions from fellow friends and faculty.",
    link: "https://question-and-answer-website.vercel.app/",
    gitlink:
      "https://github.com/samba-chinta/question_and_answer_website_client",
  },
];

const Project = (props) => {
  return (
    <Card className = {classes['project-wrapper']}>
      <h3>Projects</h3>
      {projects.map((project) => (
        <ProjectHolder
          title={project.title}
          description={project.description}
          link={project.link}
          gitlink={project.gitlink}
          key={Math.random().toString()}
        />
      ))}
    </Card>
  );
};

export default Project;
