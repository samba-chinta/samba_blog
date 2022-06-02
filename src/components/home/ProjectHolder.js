import React from "react";
// import {Link} from 'react-router-dom';
import classes from "./projectholder.module.css";

const ProjectHolder = (props) => {
  return (
    <div className={classes.holder}>
      <iframe
        src={props.link}
        className={classes.preview}
        scrolling="no"
        title={Math.random().toString()}
      ></iframe>
      <div className={classes.details}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <button>
          <a href={props.link}>Visit Page</a>
        </button>
        <button>
          <a href={props.gitlink}>Github</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectHolder;
