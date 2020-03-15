import { FETCH_PHOTOS } from '../constants/action-types'

const initState = {}

const getPhotosReducer = (state = initState, action) => {
    if(action.type === FETCH_PHOTOS){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getPhotosReducer

