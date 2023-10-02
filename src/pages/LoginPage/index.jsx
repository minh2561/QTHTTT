import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../actions/auth";
import styled from "styled-components";
import Loginbackground from "../../assets/images/login-background.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPageStyle = styled.div`
  background-image: url(${Loginbackground});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.testReducer.data);

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSuccess = ()=>{
    navigate('/')
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(authAction.login(loginForm,onSuccess))
  }
  return (
    <LoginPageStyle>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[#fff]">
          <div class="form-container p-[20px]">
            <h2>Đăng nhập</h2>
            <form className="flex flex-col gap-[10px]" onSubmit={handleLogin}>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChangeData}
              />

              <label for="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChangeData}
              />

              <button type="submit">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </LoginPageStyle>
  );
}
