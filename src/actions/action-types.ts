export const LOGIN_USER: string = 'LOGIN_USER';
export const GET_SITES: string = 'GET_SITES';
export const SET_USER: string = 'SET_USER';

interface GetSitesAction {
    type: typeof GET_SITES,
    payload: []
}

interface SetUserAction {
    type: typeof SET_USER,
    payload: []
}

export type SitesActionType = GetSitesAction;
export type SetAction = SetUserAction;