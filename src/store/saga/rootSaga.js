import { ADD_ARTICLE } from "../../constants/actionTypes";
import { put, takeEvery } from "redux-saga/effects";
import { addArticleFailed, badWordFoundInArticle } from "./../actions/index";

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
  } catch (err) {
    yield put(addArticleFailed(err));
  }
}
