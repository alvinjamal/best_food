import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const LoginUser = (data, router) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.URL_BASE}/users/login`,
      data,
      {
        withCredentials: true,
      }
    );
    const user = result.data.data;
    Cookies.setItmen("token", user.token);
    // localStorage.setItem("token", user.token);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    Swal.fire({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
      // timer: "2000",
      // showConfirmButton: false,
    }).then(() => {
      router.push("/");
    });
    console.log("User Login Success");
  } catch (err) {
    Swal.fire({
      title: "Please Try Again Login",
      text: "Login failed",
      icon: "error",
      // timer: "2000",
      // showConfirmButton: false,
    });
  }
};
