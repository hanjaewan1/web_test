import React from "react";
import { Link } from "react-router-dom";
import career1 from "../../img/career1.png";
import career2 from "../../img/career2.png";
import career3 from "../../img/career3.png";
import "../../CSS/Career.css";
import GridImage from "../GridImage";
import GridLink from "../GridLink";

const careerList = [
  {
    image: {
      first: career1,
      second: career2,
    },
    path: {
      first: "/career/career1",
      second: "/career/career2",
    },
    name: {
      first: "Career1",
      second: "Career2",
    },
  },
  {
    image: {
      first: career3,
    },
    path: {
      first: "/career/career3",
    },
    name: {
      first: "Career3",
    },
  },
];

const All_Career = () => {
  return (
    <div id="careers">
      {careerList.map((contents) => {
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

export default All_Career;
