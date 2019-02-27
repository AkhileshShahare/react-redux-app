import { all } from "redux-saga/effects";
import { saveArticleSaga } from "./saveArticleSaga";
import { fetchPostsSaga } from "./fetchPostsSaga";

export function* rootSaga() {
  yield all([saveArticleSaga(), fetchPostsSaga()]);
}
