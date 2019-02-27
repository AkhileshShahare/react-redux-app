import { handleActions } from "redux-actions";
import { savePosts } from "../actions";

const initialState = {
  posts: []
};

const savePostsReducer = handleActions(
  {
    [savePosts]: (state, { payload }) => ({
      ...initialState,
      posts: [...state.posts, ...payload]
    })
  },
  initialState
);

export default savePostsReducer;
