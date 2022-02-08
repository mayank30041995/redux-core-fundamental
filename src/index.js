import store from './store';

 console.log(store.getState());


store.dispatch({
  type: "bugAdded",
  payload:{
    description:"bug1"
  }
})
console.log(store.getState());