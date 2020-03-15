import { FETCH_USERS } from '../constants/action-types'

const initState = {}

const getUsersReducer = (state = initState, action) => {
    if(action.type === FETCH_USERS){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getUsersReducer

