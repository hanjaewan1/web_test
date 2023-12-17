import InputForm from "./InputForm";

const Login1 = (props) => {
  const { login, setLogin, setIsLoggedIn } = props;

  const handleChangeLoginInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickLoginButton = () => {
    if (login.id === "cbkim" && login.password === "1111") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <h3 align="center">로그인</h3>
      <table align="center" width="30%">
        <InputForm
          inputTitle="아이디"
          type="text"
          value={login.id}
          name="id"
          onChange={handleChangeLoginInput}
        />
        <InputForm
          inputTitle="비밀번호"
          type="password"
          value={login.password}
          name="password"
          onChange={handleChangeLoginInput}
        />
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleClickLoginButton}>로그인</button>
      </div>
    </div>
  );
};
export default Login1;
