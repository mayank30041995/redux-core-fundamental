import store from './customStore';
import * as actions from './action';

store.dispatch(actions.bugAdded("BUG 1"));

console.log(store.getState()); 

store.dispatch(actions.bugAdded("BUG 5"));

console.log(store.getState()); 

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());

store.dispatch(actions.bugResolved(2));

console.log(store.getState());