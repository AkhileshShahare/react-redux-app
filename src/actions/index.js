import { ADD_ARTICLE } from "../constants/actionTypes";

export const addArticle = payload => {
  return { type: ADD_ARTICLE, payload };
};
