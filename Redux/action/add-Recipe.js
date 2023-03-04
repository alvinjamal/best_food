import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";

export const addRecipeData = (data) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_RECIPE_PENDING" });
    console.log(data);
    const result = await axios.post(`/service/recipe/add-recipe`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const recipe = result.data.data;
    dispatch({ type: "ADD_RECIPE_SUCCESS", payload: recipe });
    Swal.fire({
      title: "Add Recipe Success",
      text: "Success Add Recipe",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    });
  } catch (err) {
    Swal.fire({
      title: "Add Recipe Failed",
      text: "Error Add Recipe again Please Correct ",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
