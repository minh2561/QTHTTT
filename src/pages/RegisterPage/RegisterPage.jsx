import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { authAction } from "../../actions/auth";
import Loginbackground from "../../assets/images/cinemabg.jpg";

const RegisterPageStyle = styled.div`
  background-image: url(${Loginbackground});
  background-size: cover;
  background-position: center;
  width: 100%;
  input {
    width: 100%;
    padding: 7px 10px;
    border-radius: 6px;
  }
`;
export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({});
  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSuccsess = () => {
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(authAction.register(registerForm, onSuccsess));
  };

  return (
    <RegisterPageStyle>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-[500px] rounded-[15px] bg-[#fff] ">
          <div className="form-container p-[20px]">
            <h2 className="text-center">Đăng Ký</h2>
            <form
              className="flex flex-col gap-[10px]"
              onSubmit={handleRegister}
            >
              <div className="my-[5px] flex flex-col gap-[5px]">
                <label htmlFor="name">Tên khách hàng</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChangeData}
                />
              </div>

              <div className="my-[5px] flex flex-col gap-[5px]">
                <label htmlFor="phoneNumber">Số điện thoại:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChangeData}
                />
              </div>

              <div className="my-[5px] flex flex-col gap-[5px]">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChangeData}
                />
              </div>

              <div className="my-[5px] flex flex-col gap-[5px]">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChangeData}
                  autoComplete="off"
                />
              </div>

              <div className="my-[5px] flex flex-col gap-[5px]">
                <label>Giới tính</label>
                <div className="flex gap-[30px]">
                  <label className="flex items-center gap-[7px]">
                    <input
                      type="radio"
                      name="gender"
                      value={0}
                      onChange={(e) =>
                        setRegisterForm((prevForm) => ({
                          ...prevForm,
                          gender: parseInt(e.target.value),
                        }))
                      }
                    />
                    Nữ
                  </label>
                  <label className="flex items-center gap-[7px]">
                    <input
                      type="radio"
                      name="gender"
                      value={1}
                      onChange={(e) =>
                        setRegisterForm((prevForm) => ({
                          ...prevForm,
                          gender: parseInt(e.target.value),
                        }))
                      }
                    />
                    Nam
                  </label>
                </div>
              </div>

              <div className="my-[5px] flex flex-col gap-[5px]">
                <label htmlFor="dateOfBirth">Ngày sinh</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  onChange={handleChangeData}
                />
              </div>
              <div className="text-end">
                Đã có tài khoản?{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Đăng nhập ngay
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#20409a] text-[#fff] border-none py-[10px] rounded-[3px] cursor-pointer"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </RegisterPageStyle>
  );
}
