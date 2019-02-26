export const GET_SITES: string = 'GET_SITES';

interface GetSitesAction {
    type: typeof GET_SITES,
    payload: []
}

export type SitesActionType = GetSitesAction;