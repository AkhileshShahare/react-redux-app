import { ADD_ARTICLE } from "../constants/actionTypes";
import { call, put, fork, take, takeEvery } from "redux-saga/effects";
import {
  addArticleSucceeded,
  addArticleFailed,
  badWordFoundInArticle
} from "./../actions/index";

const forbiddenWords = ["a", "b", "c"];

// Watcher
export function* rootSaga() {
  yield takeEvery(ADD_ARTICLE, saveArticle);
}

//Worker
function* saveArticle(article) {
  const { payload: { title } = {} } = article;
  const foundWord = forbiddenWords.filter(word => title.includes(word));

  try {
    if (foundWord.length) yield put(badWordFoundInArticle());
    yield put(addArticleSucceeded());
  } catch (err) {
    yield put(addArticleFailed(err));
  }
}
