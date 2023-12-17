import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TabComponent } from "./TabComponent.jsx";

const LoginMap = {
  login: "/login",
};

const ProjectMap = {
  All: "/project",
  proj1: "/project/proj1",
  proj2: "/project/proj2",
  proj3: "/project/proj3",
  proj4: "/project/proj4",
};

const ContestMap = {
  All: "/contest",
  contest1: "/contest/contest1",
  contest2: "/contest/contest2",
  contest3: "/contest/contest3",
};

const CareerMap = {
  All: "/career",
  career1: "/career/career1",
  career2: "/career/career2",
  career3: "/career/career3",
};

const MainHeader = () => {
  const [activeTab, setActiveTab] = useState("");

  const TabComponentMap = {
    login: {
      DropDownMap: LoginMap,
      TabComponentName: "로그인",
    },
    project: {
      DropDownMap: ProjectMap,
      TabComponentName: "프로젝트",
    },
    contest: {
      DropDownMap: ContestMap,
      TabComponentName: "공모전",
    },
    career: {
      DropDownMap: CareerMap,
      TabComponentName: "커리어",
    },
  };

  const handleClickTab = (tabComponentName) => {
    if (activeTab === tabComponentName) {
      setActiveTab("");
    } else {
      setActiveTab(tabComponentName);
    }
  };

  return (
    <header style={{ display: "flex" }}>
      <Link
        to={"/"}
        style={{ color: "blue", fontSize: "3em", height: "fit-content" }}
      >
        JWH's Portfolio
      </Link>
      <nav style={{ display: "flex", alignItems: "flex-start" }}>
        {Object.keys(TabComponentMap).map((key) => (
          <TabComponent
            DropDownMap={TabComponentMap[key].DropDownMap}
            open={activeTab === TabComponentMap[key].TabComponentName}
            handleClickTab={handleClickTab}
            TabComponentName={TabComponentMap[key].TabComponentName}
          />
        ))}
      </nav>
    </header>
  );
};

export default MainHeader;
