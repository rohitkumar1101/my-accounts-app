import { FETCH_ACTIVITIES } from '../constants/action-types'

const initState = {}

const getActivitiesReducer = (state = initState, action) => {
    if(action.type === FETCH_ACTIVITIES){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getActivitiesReducer

