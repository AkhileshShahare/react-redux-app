import {
  ADD_ARTICLE,
  ADD_ARTICLE_SUCCEEDED,
  ADD_ARTICLE_FAILED,
  BAD_WORD_FOUND
} from "../constants/actionTypes";

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });

export const addArticleSucceeded = () => ({ type: ADD_ARTICLE_SUCCEEDED });

export const addArticleFailed = err => ({ type: ADD_ARTICLE_FAILED, err });

export const badWordFoundInArticle = err => ({
  type: BAD_WORD_FOUND,
  err: err
});
