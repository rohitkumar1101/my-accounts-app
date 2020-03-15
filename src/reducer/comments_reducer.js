import { FETCH_COMMENTS } from '../constants/action-types'

const initState = {}

const getCommentsReducer = (state = initState, action) => {
    if(action.type === FETCH_COMMENTS){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getCommentsReducer

