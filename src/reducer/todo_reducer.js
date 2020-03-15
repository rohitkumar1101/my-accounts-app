import { FETCH_TODO } from '../constants/action-types'

const initState = {}

const getToDoReducer = (state = initState, action) => {
    if(action.type === FETCH_TODO){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
export default getToDoReducer

