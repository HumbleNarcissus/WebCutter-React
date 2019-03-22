import isEmpty from '../utils/isEmpty';
import { SET_USER, SetAction } from '../actions/action-types';


const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action: SetAction) => {
    console.log('action', action.payload)
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }

};