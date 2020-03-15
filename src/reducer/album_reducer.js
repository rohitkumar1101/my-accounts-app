import { FETCH_ALBUM } from '../constants/action-types'

const initState = {}

const getAlbumsReducer = (state = initState, action) => {
    if(action.type === FETCH_ALBUM){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getAlbumsReducer

