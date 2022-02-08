import store from './store';
import { bugAdded , bugRemoved, bugResolved } from './action'

 console.log(store.getState());

 store.dispatch(bugAdded('Bugsss'))
 console.log(store.getState());

//  store.dispatch(bugRemoved(1));
//  console.log(store.getState());

 store.dispatch(bugResolved(1))
 console.log(store.getState());

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload:{
//     description:"bugs"
//   }
// })
// console.log(store.getState());

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload:{ id:1}
// })
// console.log(store.getState());