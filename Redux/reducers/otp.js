import axios from "axios";

export const verificationOtpUser = (data, router) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post(
      "http://localhost:3500/users/verificationOtp",
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: user });
    router.push("/Login");
    console.log(" verification otp success");
  } catch (err) {
    console.log(" verification otp err");
    console.log(err);
  }
};
