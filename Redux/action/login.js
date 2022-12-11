import axios from "axios";

export const LoginUser = (data, router) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("http://localhost:3500/users/login", data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    window.location, router.push("/Landing-Page");
    console.log(" login success");
  } catch (err) {
    console.log(" login err");
    console.log(err);
  }
};
