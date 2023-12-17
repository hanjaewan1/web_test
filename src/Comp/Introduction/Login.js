import { useState } from "react";
import { Link } from "react-router-dom";
import Login1 from "./Login1";

const Login = () => {
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <Link to={"/login/resume"}>이력서</Link>
        <br />
        <br />
        <Link to={"/login/selfintro"}>자기소개서</Link>
      </div>
    );
  } else
    return (
      <Login1 login={login} setLogin={setLogin} setIsLoggedIn={setIsLoggedIn} />
    );
};

export default Login;
