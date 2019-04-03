import * as actions from '../../actions/sitesActions';
import * as types from '../../actions/action-types';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('site actions', () => {
    afterEach(() => {
        nock.cleanAll();
    })

    it('should GET all sites', () => {
        const responsebody = { "sites": [
            {
            "id": 1,
            "full_link": "google.com",
            "short_link": "xyz123",
            "expiry_date": "2019-01-28 13:15:05",
            "working": false
            },
            {
            "id": 4,
            "full_link": "amazon.com",
            "short_link": "03KpBv",
            "expiry_date": "2019-01-28 14:59:52",
            "working": false
            }]
        }

        nock('http://localhost')
         .get('/sites')
         .reply(200, responsebody);

        const exceptedActions = [
            { type: types.GET_SITES, data: responsebody }
        ]

        const store = mockStore({ sites: []})

        return store.dispatch(actions.getSites()).then(() => {
            expect(store.getActions()).toEqual(exceptedActions)
        })
    })

    it('should miss auth token', () => {
       nock('http://www.example.com')
        .post('/sites', 'site=google.com')
        .reply(200, { message: 'Created new site.' })

        const exceptedActions = [
            { type: types.GET_SITES, data: {msg: "Missing Authorization Header"}}
        ]

        const store = mockStore({sites: []})
        const userData = {site: "google.com"}

        return store.dispatch(actions.addSite(userData)).then(() => {
            expect(store.getActions()).toEqual(exceptedActions)
        })
    })
})