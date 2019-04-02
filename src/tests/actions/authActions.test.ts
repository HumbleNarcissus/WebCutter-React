import * as actions from '../../actions/authActions';
import * as types from '../../actions/action-types';
import fetchMock from 'fetch-mock';

const exampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

describe('auth actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('should create action to set user', () => {
        const exceptedAction = {
            type: types.SET_USER,
            payload: exampleToken
        }
        expect(actions.setCurrentUser(exampleToken))
        .toEqual(exceptedAction)
    })
})