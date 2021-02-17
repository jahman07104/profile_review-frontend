import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  // typeof window === "object" &&
  //   typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //   : f => f
);

export default store;