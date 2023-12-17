import indeximage from "../img/index.jpg";
import { IoPersonSharp, IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt, FaPencilAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const index = () => {
  return (
    <div id="index" style={{ display: "flex" }}>
      <div>
        <h1>도전하는 개발자, 한재완</h1>
        <br />
        <p style={{ fontSize: "1.3em" }}>
          안녕하세요. 공부가 취미인 풀 스택 웹 개발자입니다.
          <br />
          매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
        </p>
        <img src={indeximage} width="300" height="300" />
        <br></br>
      </div>
      <table id="about_me" style={{ paddingLeft: "100px" }}>
        <tr>
          <td
            colSpan="3"
            style={{ textAlign: "center", borderBottom: "solid" }}
          >
            <h1>About Me</h1>
          </td>
        </tr>
        <tr>
          <td>
            <h3>
              <IoPersonSharp></IoPersonSharp>이름
            </h3>
            <br></br>한재완
          </td>
          <td>
            <h3>
              <FaCalendarAlt></FaCalendarAlt>
              생년월일
            </h3>
            <br></br>01.10.24
          </td>
          <td>
            <h3>
              <IoLocationSharp></IoLocationSharp>
              주소지
            </h3>
            <br></br>경기도 성남시 수정구
          </td>
        </tr>
        <tr>
          <td>
            <h3>
              <BsTelephoneFill></BsTelephoneFill>
              연락처
            </h3>
            <br></br>010-4830-2974
          </td>
          <td>
            <h3>
              <MdEmail></MdEmail>
              이메일
            </h3>
            <br></br>plo555@naver.com
          </td>
          <td>
            <h3>
              <FaPencilAlt></FaPencilAlt>
              학력
            </h3>
            <br></br>가천대학교 컴퓨터공학과
          </td>
        </tr>
      </table>
    </div>
  );
};

export default index;
