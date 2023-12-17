import React from "react";
import { Link } from "react-router-dom";
import career2 from "../../img/career2.png";
import { DetailComponent } from "../DetailComponent";

const career2Data = {
  title: "코딩 부트캠프",
  image: career2,
  contents: [
    "삼성에서 주최하는 '삼성 청년 SW 아카데미(Samsung SW Academy For Youth, SSAFY)'에 참가하였습니다. 약 1년이라는 시간에 걸쳐 코딩 교육과 프로젝트 경험을 쌓았습니다.",
  ],
};
const Career2 = () => {
  return (
    <div>
      <DetailComponent data={career2Data} />
      <Link to={"/career/career1"} className="before_career">
        이전 경력
      </Link>
      <Link to={"/career/career3"} className="next_career">
        다음 경력
      </Link>
    </div>
  );
};

export default Career2;
