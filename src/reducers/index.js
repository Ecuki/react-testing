import { combineReducers } from "redux";
import reducer from "../reducers/posts/reducer";

export default combineReducers({ posts: reducer });
