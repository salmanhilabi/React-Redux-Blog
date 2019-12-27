import { combineReducers } from 'redux';
import BlogReducer from './blogReducer';

const rootReducer = combineReducers({
  blogReducer: BlogReducer // only one reducer
});

export default rootReducer;
