import { createAction, createReducer } from '@reduxjs/toolkit';

const action = createAction("bugUpdated");
console.log(action.toString());
console.log(action.type);


let lastId=0;

//create action

export const bugAdded= createAction("bugAdded");
export const bugRemoved=  createAction("bugRemoved")
export const bugResolved=  createAction("bugResolved")

// reducers

export default createReducer([], {

    [bugAdded.type]: (bugs , action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugRemoved.type] : (bugs , action) => {
        return bugs.filter(bug => bug.id !== action.payload.id);
    },

    [bugResolved.type] : (bugs , action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    }

})
