import {GET_USERS,DELETE_USER} from '../actions/types';


const initialState = [];

const userReducer = (state=initialState, action) => {
    switch(action.type) {

        case GET_USERS:
        return action.payload;

        case DELETE_USER:
        return state.filter((state) => state._id !== action.payload);
        default:

        return state;

    }
}

export default userReducer;