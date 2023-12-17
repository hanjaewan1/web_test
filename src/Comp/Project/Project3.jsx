import React from "react";
import { Link } from "react-router-dom";
import project3 from "../../img/proj3.png";
import { DetailComponent } from "../DetailComponent";

const project3Data = {
  title: "드럼 학원 웹페이지 제작",
  image: project3,
  contents: [
    "취미로 다니고 있는 드럼 학원 원장님의, 웹 홈페이지가 없다는 말씀에 리액트와 aws를 이용하여 웹페이지를 만들어보았습니다.",
  ],
};
const Project3 = () => {
  return (
    <div>
      <DetailComponent data={project3Data} />
      <Link to={"/project/proj2"} className="before_proj">
        이전 프로젝트
      </Link>
      <Link to={"/project/proj4"} className="next_proj">
        다음 프로젝트
      </Link>
    </div>
  );
};

export default Project3;
