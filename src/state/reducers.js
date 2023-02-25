import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import filtersSlice from "./filters/filtersSlice";
import todosSlice from "./todos/todosSlice";

/**
 * A store can have only one reducer, hence using `combineReducers` API from Redux,
 * we can do that, it takes a Reducer Map as an input
 * `{nameThatYouWantToGive: sliceName}`
 */
const rootReducer = combineReducers({
  todos: todosSlice,
  filters: filtersSlice,
});

// these are two middlewares, middlewares find a place between the time an action is dispatched
const handleDispatch = (store) => (next) => (action) => {
  if (action.type === "todos/removeTodo") {
    console.log("Removing todo with ID", action.payload.id);
  }
  return next(action);
};

// apply middleware clubs these middlewares and returns one middleware
// best use case for these middlewares is to have a rest API called.
const middleWare = applyMiddleware(handleDispatch);

const store = legacy_createStore(rootReducer, middleWare);

export default store;
