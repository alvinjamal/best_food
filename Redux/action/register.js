import axios from "axios";

export const RegisUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      "http://localhost:3500/users/register",
      data
    );
    const user = result.data.data;
    dispact({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/Landing-Page");
    console.log(" Register success");
  } catch (err) {
    console.log(" Register err");
    console.log(err);
  }
};
