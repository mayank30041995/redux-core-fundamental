let lastId=0;

export default function reducer(state=[], action) {
switch (action.type) {
    case "bugAdded" : 
    return [
        ...state,
        {
            id : ++lastId,
            description : action.payload.description,
            resolved: false
        }
    ]

    default: return state;
}}