import axios from "axios";
import Swal from "sweetalert2";

export const VerifOtpUser = (data, router) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post(
      `${process.env.URL_BASE}/users/verification`,
      data
    );
    const otp = result.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: otp });
    Swal.fire({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      router.push("/auth/Login");
    });
    console.log(" verification otp success");
  } catch (err) {
    Swal.fire({
      title: "Please Try Again Code Verification",
      text: `${err.response.data.message}`,
      icon: "error",
    });
  }
};
