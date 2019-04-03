import { GET_SITES } from './action-types';
import { checkAuthToken } from '../utils/checkAuthToken';

export const getSites = (): any => async (dispatch: any) => {
    return fetch('http://localhost/sites', {
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

export const addSite = (userData: any): any => async (dispatch: any) => {
    return fetch('http://localhost/sites', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'Authorization': checkAuthToken() || ""
        },
        body: JSON.stringify({
            site: userData.site
        })
    })
    .then(response => response.json())
    .then(_ => dispatch(getSites()))
    .catch(err => console.error(err))
    
}

export const deleteSite = (siteName: string) => async (dispatch: any) => {
    return fetch(`http://localhost/sites/${siteName}`, {
        method: 'delete',
        headers: {
            'Content-type': 'application/json',
            'Authorization': checkAuthToken() || ""
        },
    })
    .then( _ => dispatch(getSites()))
    .catch(err => console.error(err))
}