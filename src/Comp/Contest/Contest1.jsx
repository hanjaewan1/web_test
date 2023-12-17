import React from "react";
import { Link } from "react-router-dom";
import contest1 from "../../img/contest1.png";
import { DetailComponent } from "../DetailComponent";

const contest1Data = {
  title: "공공IP활용 청년 창업 경진대회",
  image: contest1,
  contents: [
    "지능형 차량용 블랙박스 시스템, 발효 녹차 추출물을 이용한 아토피성 피부염 개선용 조성물, 전자기기용 충전기, 미세유체채널장치 및 사용방법 등 융기원과 서울대, 도내 대학 및 기관이 보유한 총 15개의 특허 기술을 기반으로 아이디어 경진 대회를 펼쳤습니다.",
  ],
};
const Contest1 = () => {
  return (
    <div>
      <DetailComponent data={contest1Data} />
      <Link to={"/contest/contest2"} className="Nobefore_next_contest">
        다음 공모전
      </Link>
    </div>
  );
};

export default Contest1;
