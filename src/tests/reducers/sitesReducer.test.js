import reducer from '../../reducers/sitesReducer';
import * as types from '../../actions/action-types';

describe('sites reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,  {})).toEqual(
            {
                sites: [],
                loading: false
            }
        )
    })

    it('should handle ADD_TODO', () => {

        const data = { sites: ['google.com']}
        const anotherData = { sites: ['google.com', 'amazon.com']}

        expect(
            reducer([], {
                type: types.GET_SITES,
                data: data
            })
        ).toEqual({
            loading: false,
            sites: ['google.com']
        })

        expect(
            reducer(
                {
                    loading: false,
                    sites: ['google.com']
                },
                {
                    type: types.GET_SITES,
                    data: anotherData
                }
            )
        ).toEqual({
            loading: false,
            sites: ['google.com', 'amazon.com']
        })
        
    })
})