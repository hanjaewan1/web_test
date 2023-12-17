import React from "react";
import { Link } from "react-router-dom";
import career1 from "../../img/career1.png";
import { DetailComponent } from "../DetailComponent";

const career1Data = {
  title: "아르바이트 및 인턴",
  image: career1,
  contents: [
    "중/고등학생을 대상으로 하는 코딩 학원 아르바이트를 하였습니다. 대상이 어린 학생들이다보니 하드웨어에 접근하는 C언어보다는 파이썬의 문법과 라이브러리를 위주로 강의하였습니다.",
  ],
};
const Career1 = () => {
  return (
    <div>
      <DetailComponent data={career1Data} />
      <Link to={"/career/career2"} className="Nobefore_next_career">
        다음 경력
      </Link>
    </div>
  );
};

export default Career1;
