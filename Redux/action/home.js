import axios from "axios";
import Router from "next/router";

export const addRecipeData = (data) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_RECIPE_PENDING" });
    console.log(data);
    const result = await axios.post(
      `http://localhost:3500/recipe/add-recipe`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const recipe = result.data.data;
    dispatch({ type: "ADD_RECIPE_SUCCESS", payload: recipe });
    Router.push("/Profile");
    console.log("Add Recipe Success");
  } catch (err) {
    console.log("Add Recipe Fail");
    console.log(err);
  }
};
