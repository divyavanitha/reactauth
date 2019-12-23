import {SET_CURRENT_USER} from '../actions/types';


const initialState = { 
    isAuthenticated: false,
    user: ""
}

const authReducer = (state=initialState, action) => {
console.log(action);
    switch(action.type) {

        case SET_CURRENT_USER:
       
        return { 
            isAuthenticated: action.payload != "" ? true : false,
            user: action.payload
        };

        default:

        return state;

    }
}

export default authReducer;