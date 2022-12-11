import { combineReducers } from "redux";
import UserReducers from "./user";
import RecipeReducers from "./recipe";
import VerifOtp from "./otp";

const RootReducers = combineReducers({
  user: UserReducers,
  recipe: RecipeReducers,
  verifOtp: VerifOtp,
});

export default RootReducers;
