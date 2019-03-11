import {GET_SITES} from './action-types';
import { checkAuthToken } from '../utils/checkAuthToken';

export const getSites = () => (dispatch: any) => {
    fetch('http://localhost/sites', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': checkAuthToken() || ""
        }
    })
    .then(res => {
        dispatch({
            type: GET_SITES,
            data: res
        })
    })
    .catch(err => console.error(err));
}