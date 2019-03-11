import { 
    GET_SITES, SitesActionType
} from '../actions/action-types';

const initialState = {
    sites: [],
    loading: false
};

export default (state = initialState, action: SitesActionType) => {
    switch (action.type) {
        case GET_SITES:
            return {
                ...state,
                sites: [...state.sites],
                loading: false
            }
        default:
            return state;
    }
};