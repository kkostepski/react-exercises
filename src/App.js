import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import ReduxCounter from "./ReduxCounter/ReduxCounter";
import counterReducer from "./ReduxCounter/ReduxCounter.redux";

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer, undefined, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}

export default App;
