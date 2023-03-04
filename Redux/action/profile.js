import axios from "axios";
import swal from "sweetalert";

export const detailProfile = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: `${process.env.URL_BASE}/`,
      url: `users/profile`,
      //   data: id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_PROFILE_ID", payload: res.data.data });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const editProfile = (id, formData, token) => async (dispatch) => {
  try {
    const result = await axios.put(`/service/users/profile`, formData, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = result.data;
    dispatch({ type: "EDIT_PROFILE", payload: profile });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};
