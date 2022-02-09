import configureStore from './store/configureStore';
import * as action from './store/bugs'
const store = configureStore();

const unsuscribe=store.subscribe(() => {
    console.log('store changed');
})

 store.dispatch(action.bugAdded({description:'Bugsss'}))
 console.log(store.getState());

 store.dispatch(action.bugAdded({description:'Bugsds'}))

 console.log(store.getState());
 store.dispatch(action.bugAdded({description:'Bugsgs'}))
 
 console.log(store.getState());

 store.dispatch(action.bugRemoved({id: 1}));
 console.log(store.getState());

// unsuscribe();

 store.dispatch(action.bugResolved({id: 2}))
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