import React from "react";
import { Link } from "react-router-dom";
import career3 from "../../img/career3.png";
import { DetailComponent } from "../DetailComponent";

const career3Data = {
  title: "자격증 및 어학점수",
  image: career3,
  contents: [
    "자격증은 학기 중에 네트워크 관리사 2급, 리눅스 마스터 2급, SQLP을 취득하였고,",
    "어학과 관련해서는 TOEIC 850점과 TOEIC SPEAKING IM3등급을 취득하였습니다.",
  ],
};
const Career3 = () => {
  return (
    <div>
      <DetailComponent data={career3Data} />
      <Link to={"/career/career2"} className="before_career">
        이전 경력
      </Link>
    </div>
  );
};

export default Career3;
