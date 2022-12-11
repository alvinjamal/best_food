import axios from "axios";

export const LoginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("http://localhost:3500/users/login", data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/Landing-Page");
    console.log(" login success");
  } catch (err) {
    console.log(" login err");
    console.log(err);
  }
};
