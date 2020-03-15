import { FETCH_POSTS } from '../constants/action-types'

const initState = {}

const getPostsReducer = (state = initState, action) => {
    if(action.type === FETCH_POSTS){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getPostsReducer

