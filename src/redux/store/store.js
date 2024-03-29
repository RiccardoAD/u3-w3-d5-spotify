import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Search from "../reducers/Search";
import Play from "../reducers/Play";
import Like from "../reducers/Like";

const store = configureStore({
  reducer: combineReducers({
    search: Search,
    player: Play,
    likes: Like,
  }),
});

export default store;
