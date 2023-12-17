import React from "react";
import All_Career from "./Career/All_Career";
import Career1 from "./Career/Career1";
import Career2 from "./Career/Career2";
import Career3 from "./Career/Career3";
import All_Contest from "./Contest/All_Contest";
import Contest1 from "./Contest/Contest1";
import Contest2 from "./Contest/Contest2";
import Contest3 from "./Contest/Contest3";
import Login from "./Introduction/Login.js";
import Resume from "./Introduction/Resume";
import SelfIntro from "./Introduction/SelfIntro";
import All_Proj from "./Project/All_Proj.jsx";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";
import Project4 from "./Project/Project4";
import index from "./index";
import { Route, Routes } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path="/" Component={index} />
          <Route path="/login" Component={Login} />
          <Route path="/login/resume" Component={Resume} />
          <Route path="/login/selfintro" Component={SelfIntro} />

          <Route path="/project" Component={All_Proj} />
          <Route path="/project/proj1" Component={Project1} />
          <Route path="/project/proj2" Component={Project2} />
          <Route path="/project/proj3" Component={Project3} />
          <Route path="/project/proj4" Component={Project4} />

          <Route path="/contest" Component={All_Contest} />
          <Route path="/contest/contest1" Component={Contest1} />
          <Route path="/contest/contest2" Component={Contest2} />
          <Route path="/contest/contest3" Component={Contest3} />

          <Route path="/career" Component={All_Career} />
          <Route path="/career/career1" Component={Career1} />
          <Route path="/career/career2" Component={Career2} />
          <Route path="/career/career3" Component={Career3} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContent;
