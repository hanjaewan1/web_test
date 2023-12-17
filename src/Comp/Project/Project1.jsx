import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../img/proj1.png";
import { DetailComponent } from "../DetailComponent";

const project1Data = {
  title: "유튜브와 지도를 연동한 맛집 지도 제작",
  image: project1,
  contents: [
    "평소 음식/맛집에 대한 관심이 많아서 맛집 리뷰 채널 위주로 유튜브를 시청하였습니다. 그러한 와중 유튜브로 시청한 맛집이 자동적으로 지도 앱에 추가되었으면 하는 바람이 있었고",
    "유튜브와 네이버 지도 API를 연동하여 맛집 지도를 제작하였습니다.",
  ],
};
const Project1 = () => {
  return (
    <div>
      <DetailComponent data={project1Data} />
      <Link to={"/project/proj2"} className="Nobefore_next_proj">
        다음 프로젝트
      </Link>
    </div>
  );
};

export default Project1;
