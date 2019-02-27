import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import addArticleReducer from "./reducers/addArticleReducer";
import { rootSaga } from "./saga/rootSaga";
import savePostsReducer from "./reducers/savePostsReducer";

const sagaMiddleware = createSagaMiddleware();

//Enable redux dev tools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combined reducers
const rootReducer = combineReducers({
  articles: addArticleReducer,
  posts: savePostsReducer
});

//Create store
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
