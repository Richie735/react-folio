import React from "react";
import { FiGithub } from "react-icons/fi";
import "./projects.css";

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio1.jpg"),
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio2.jpg"),
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio3.jpg"),
  },
];

const projectContent = projects.map((project) => (
  <li className="project">
    <div className="project-card">
      <img src={project.image} className="project-img" />
      <div className="project-content">
        <div className="project-top">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-description">{project.description}</div>
        </div>

        <ul className="project-list">
          {project.tecs.map((tech, i) => (
            <li key={i}>{tech.tittle}</li>
          ))}
        </ul>
        <a href={project.links} target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
      </div>
    </div>
  </li>
));

function Projects() {
  return (
    <section id="projects">
      <h2 className="numbered-heading-even">
        <span>04.</span>Projects
      </h2>
      <ul className="projects-grid">{projectContent}</ul>
    </section>
  );
}

export default Projects;
