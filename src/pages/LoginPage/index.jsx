import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { authAction } from "../../actions/auth";
import Loginbackground from "../../assets/images/cinemabg.jpg";

const LoginPageStyle = styled.div`
  background-image: url(${Loginbackground});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  input {
    width: 100%;
    padding: 7px 10px;
    border-radius: 6px;
  }
`;

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSuccess = () => {
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authAction.login(loginForm, onSuccess));
  };
  
  return (
    <LoginPageStyle>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[#fff] rounded-[15px]">
          <div className="form-container p-[20px]">
            <h2 className="text-center">Đăng nhập</h2>
            <form className="flex flex-col gap-[10px]" onSubmit={handleLogin}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChangeData}
              />

              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChangeData}
                autoComplete="off"
              />
              <div className="text-end my-[5px]">
                Chưa có tài khoản?{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Đăng ký ngay
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#20409a] text-[#fff] border-none py-[10px] rounded-[3px] cursor-pointer"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoginPageStyle>
  );
}
