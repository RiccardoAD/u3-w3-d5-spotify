import { createSlice } from "@reduxjs/toolkit";

export const likeReducer = createSlice({
  name: "liked",
  initialState: {
    likedSongs: [],
  },
  reducers: {
    setLike: (state, action) => {
      state.likedSongs.push(action.payload);
    },
    removeLike: (state, action) => {
      const index = state.likedSongs.indexOf(action.payload);
      if (index !== -1) {
        state.likedSongs.splice(index, 1);
      }
    },
  },
});

export const { setLike, removeLike } = likeReducer.actions;

export default likeReducer.reducer;
