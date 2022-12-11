import axios from "axios";

export const RegisterUser = (data, router) => async (dispatch) => {
  try {
    dispatch({ type: "USER_Register_PENDING" });
    const result = await axios.post(
      "http://localhost:3500/users/register",
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    router.push("/Verif-Otp");
    console.log(" Register success");
  } catch (err) {
    console.log(" Register err");
    console.log(err);
  }
};
