import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers';
// import thunkMiddleware from 'redux-thunk'

// const store = createStore(
//   reducer,
//   window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
//   applyMiddleware(thunkMiddleware),
// );

// export default store;

// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducer';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;