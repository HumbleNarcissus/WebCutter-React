import {GET_SITES} from './action-types';

export const getSites = () => (dispatch: any) => {
    fetch('http://localhost/sites')
        .then(res => {
            dispatch({
                type: GET_SITES,
                data: res
            })
        })
        .catch(err => console.error(err));
}