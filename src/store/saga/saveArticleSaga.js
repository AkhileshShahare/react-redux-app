import { put, takeEvery } from "redux-saga/effects";
import { ADD_ARTICLE } from "../../constants/actionTypes";
import { badWordFoundInArticle, addArticleFailed } from "../actions";

const forbiddenWords = ["a", "b", "c"];

function* saveArticle(article) {
  const { payload: { title } = {} } = article;
  const foundWord = forbiddenWords.filter(word => title.includes(word));

  try {
    if (foundWord.length) yield put(badWordFoundInArticle());
  } catch (err) {
    yield put(addArticleFailed(err));
  }
}

// Watcher
export function* saveArticleSaga() {
  yield takeEvery(ADD_ARTICLE, saveArticle);
}
