import { 
    ADD_TODO, 
    REMOVE_ITEM ,
    TOGGLE_ITEM,
    GET_ITEM
} from '../action/actionType';

let initialState = {
    id: 0,
    name: "",
    completed: false,
    articles : []
}

const reducerToDo = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM:
            return action.payload;
        case ADD_TODO: 
            return [...state, action.payload];
        case REMOVE_ITEM:
            let newState = [...state];
            // console.log(newState);
            return newState.filter(item => item !== action.payload)
        case TOGGLE_ITEM:
            // console.log("id", action.payload);
            return state.map(item => {
                if(item.id === action.payload){
                    return Object.assign(item, {completed: !item.completed})
                }
                else{
                    return item
                }
            })
        default: 
            return state = [];
    }
}

export default reducerToDo;
