import axios from "axios";
import Router from "next/router";

export const VerifOtpUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post(
      "http://localhost:3500/users/verificationOtp",
      data
    );
    const otp = result.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: otp });
    Router.push("/Login");
    console.log(" verification otp success");
  } catch (err) {
    console.log(" verification otp err");
    console.log(err);
  }
};
