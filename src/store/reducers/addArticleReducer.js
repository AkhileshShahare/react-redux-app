import { handleActions } from "redux-actions";
import { addArticle, addArticleFailed } from "../actions";

const initialState = {
  articles: [],
  hasAddedArticles: false,
  errorLoadingArticles: false
};

const addArticleReducer = handleActions(
  {
    [addArticle]: (state, { payload }) => ({
      ...initialState,
      articles: [...state.articles, payload],
      hasAddedArticles: true
    }),

    [addArticleFailed]: state => ({
      ...state,
      errorLoadingArticles: true
    })
  },
  initialState
);

export default addArticleReducer;
