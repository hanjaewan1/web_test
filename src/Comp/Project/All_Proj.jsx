import React from "react";
import "../../CSS/Project.css";
import project1 from "../../img/proj1.png";
import project2 from "../../img/proj2-1.png";
import project3 from "../../img/proj3.png";
import project4 from "../../img/proj4.png";
import GridImage from "../GridImage";
import GridLink from "../GridLink";

const projectList = [
  {
    image: {
      first: project1,
      second: project2,
    },
    path: {
      first: "/project/proj1",
      second: "/project/proj2",
    },
    name: {
      first: "Project1",
      second: "Project2",
    },
  },
  {
    image: {
      first: project3,
      second: project4,
    },
    path: {
      first: "/project/proj3",
      second: "/project/proj4",
    },
    name: {
      first: "Project3",
      second: "Project4",
    },
  },
];

const All_Proj = () => {
  return (
    <div id="projects">
      {projectList.map((contents) => {
        return (
          <>
            <GridImage image={contents.image} />
            <GridLink path={contents.path} name={contents.name} />
          </>
        );
      })}
    </div>
  );
};

export default All_Proj;
