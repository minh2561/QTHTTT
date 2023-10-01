import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../actions/auth";
import styled from "styled-components";
import Loginbackground from "../../assets/images/login-background.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPageStyle = styled.div`
  background-image: url(${Loginbackground});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  input {
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    flex-grow: 1;
  }
`;
export default function RegisterPage() {
  const navigate = useNavigate()
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

  const onSuccsess = ()=>{
    navigate('/login')
  }
  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(authAction.register(registerForm,onSuccsess));
  };
  return (
    <RegisterPageStyle>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[500px] rounded-[15px]">
          <div class="form-container p-[20px]">
            <h2>Đăng Ký</h2>
            <form
              className="flex flex-col gap-[10px]"
              onSubmit={handleRegister}
            >
              <div className="flex">
                <i className="fas fa-user"></i>
                <input
                  placeholder="Tên khách hàng"
                  type="text"
                  name="name"
                  onChange={handleChangeData}
                />
              </div>

              <div className="flex">
                <label for="phoneNumber">Số điện thoại:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChangeData}
                />
              </div>

              <label for="address">Địa chỉ:</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleChangeData}
              />

              <label for="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChangeData}
              />

              <label for="userName">Tên đăng nhập:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={handleChangeData}
              />

              <label for="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="passWord"
                onChange={handleChangeData}
              />

              <label for="gender">Giới tính</label>
              <div>
                <label>
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
                <label>
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

              <label>Ngày sinh</label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChangeData}
              />

              <button type="submit">Đăng Ký</button>
            </form>
          </div>
        </div>
      </div>
    </RegisterPageStyle>
  );
}
