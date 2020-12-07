import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formsReducer } from "redux-form";
import StreamsReducer from "./StreamReducer";

export default combineReducers({
  auth: authReducer,
  form: formsReducer,
  streams: StreamsReducer,
});
