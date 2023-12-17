import React from "react";
import { Link } from "react-router-dom";
import contest1 from "../../img/contest1.png";
import contest2 from "../../img/contest2.png";
import contest3 from "../../img/contest3.png";
import "../../CSS/Contest.css";
import GridImage from "../GridImage";
import GridLink from "../GridLink";

const contestList = [
  {
    image: {
      first: contest1,
      second: contest2,
    },
    path: {
      first: "/contest/contest1",
      second: "/contest/contest2",
    },
    name: {
      first: "Contest1",
      second: "Contest2",
    },
  },
  {
    image: {
      first: contest3,
    },
    path: {
      first: "/contest/contest3",
    },
    name: {
      first: "Contest3",
    },
  },
];

const All_Contest = () => {
  return (
    <div id="contests">
      {contestList.map((contents) => {
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

export default All_Contest;
