import axios from "axios";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      router.push("/auth/Verif-Otp");
    });
    console.log("Register Success");
  } catch (err) {
    Swal.fire({
      title: "Please Try Again Register",
      text: `${err.response.data.message}`,
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
