import { createAction } from "redux-actions";

import {
  ADD_ARTICLE_TRIGGERED,
  ADD_ARTICLE,
  ADD_ARTICLE_SUCCEEDED,
  ADD_ARTICLE_FAILED,
  BAD_WORD_FOUND
} from "../../constants/actionTypes";

export const addArticle = createAction(ADD_ARTICLE);

export const addArticleTriggered = createAction(ADD_ARTICLE_TRIGGERED);

export const addArticleSucceeded = createAction(ADD_ARTICLE_SUCCEEDED);

export const addArticleFailed = createAction(ADD_ARTICLE_FAILED);

export const badWordFoundInArticle = createAction(BAD_WORD_FOUND);
