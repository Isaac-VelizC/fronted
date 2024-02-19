import { combineReducers } from "redux";
import categories from "./categories";
import blog from "./blogs";

export default combineReducers({
    categories,
    blog
})