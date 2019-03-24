import {GET_SITES} from './action-types';
import { checkAuthToken } from '../utils/checkAuthToken';

export const getSites = () => (dispatch: any) => {
    fetch('http://localhost/sites', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': checkAuthToken() || ""
        }
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_SITES,
            data: data 
        })
    })
    .catch(err => console.error(err));
}