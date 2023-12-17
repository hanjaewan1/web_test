import React from "react";
import { Link } from "react-router-dom";
import contest2 from "../../img/contest2.png";
import { DetailComponent } from "../DetailComponent";

const contest2Data = {
  title: "세상을 바꾸는 사회 혁신 아이디어 공모전",
  image: contest2,
  contents: [
    "우리 사회의 다양한 사회문제 해결을 위한 서비스/제품/프로젝트 아이디어에 대한 공모전입니다. 근육활성도 기계에 대한 아이디어로 참여하였습니다.",
  ],
};
const Contest2 = () => {
  return (
    <div>
      <DetailComponent data={contest2Data} />
      <Link to={"/contest/contest1"} className="before_contest">
        이전 공모전
      </Link>
      <Link to={"/contest/contest3"} className="next_contest">
        다음 공모전
      </Link>
    </div>
  );
};

export default Contest2;
