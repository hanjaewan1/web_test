import React from "react";
import { Link } from "react-router-dom";
import project2 from "../../img/proj2-1.png";
import { DetailComponent } from "../DetailComponent";

const project2Data = {
  title: "무인 편의점 일회용 봉투 제공 시스템",
  image: project2,
  contents: [
    "기숙사 내부의 무인편의점을 자주 이용해왔지만, 평소 일회용 봉투를 제공해주지 않는 점이 불편하였습니다.",
    "따라서 물건의 가격, 또는 부피에 따라 일회용 봉투를 제공하는 시스템을 개발하였습니다.",
  ],
};
const Project2 = () => {
  return (
    <div>
      <DetailComponent data={project2Data} />

      <Link to={"/project/proj1"} className="before_proj">
        이전 프로젝트
      </Link>
      <Link to={"/project/proj3"} className="next_proj">
        다음 프로젝트
      </Link>
    </div>
  );
};

export default Project2;
