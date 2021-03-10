import { combineReducers } from 'redux';
import projects from './projects.reducer'
import navHeader from './navHeader.reducer'

const rootReducer = combineReducers({
  projects,
  navHeader,
});

export default rootReducer;