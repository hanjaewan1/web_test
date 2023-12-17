import React from "react";
import { Link } from "react-router-dom";
import contest3 from "../../img/contest3.png";
import { DetailComponent } from "../DetailComponent";

const contest3Data = {
  title: "2023 서울특별시 빅데이터캠퍼스 공모전",
  image: contest3,
  contents: [
    "서울특별시 빅데이터캠퍼스에서 제공하는 빅데이터 분석환경을 활용하여 사회문제에 대한 해결방안을 마련하거나, 비즈니스 모델개발 등 빅데이터 기반의 4차 산업발전 등을 통한 사회혁신 기반을 조성하기 위한 공모전. 서울시의 미세먼지에 대해 다루었습니다.",
  ],
};
const Contest3 = () => {
  return (
    <div>
      <DetailComponent data={contest3Data} />
      <Link to={"/contest/contest2"} className="before_contest">
        이전 공모전
      </Link>
    </div>
  );
};

export default Contest3;
