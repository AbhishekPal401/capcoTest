import { combineReducers } from "redux";
import auth from "./slices/auth/login.js";
import { restApi } from "../services/api/index.js";

const rootReducer = combineReducers({
  auth,
  [restApi.reducerPath]: restApi.reducer,
});

export default rootReducer;
