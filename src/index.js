import store from './customStore';
import * as actions from './action';

store.dispatch(actions.bugAdded("BUG 1"));

console.log(store.getState()); 