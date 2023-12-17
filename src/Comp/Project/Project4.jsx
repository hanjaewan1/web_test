import React from "react";
import { Link } from "react-router-dom";
import project4 from "../../img/proj4.png";
import { DetailComponent } from "../DetailComponent";

const project4Data = {
  title: "노인 치료에 쓰일 근육활성도 기계 프로그래밍",
  image: project4,
  contents: [
    "지하철을 타는 도중 '노인 근감소증'에 대한 치료제를 테스트하는 포스터를 보았습니다.",
    "이러한 근감소증과 같은 노인 질병들에 요긴하게 사용될 수 있는 근육활성도를 측정하는 기계에 대해 프로그래밍을 해보았습니다.",
  ],
};
const Project4 = () => {
  return (
    <div>
      <DetailComponent data={project4Data} />
      <Link to={"/project/proj3"} className="before_proj">
        이전 프로젝트
      </Link>
    </div>
  );
};

export default Project4;
