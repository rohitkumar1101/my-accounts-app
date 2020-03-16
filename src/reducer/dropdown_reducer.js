import { TOGGLE_DROPDOWN } from "../constants/action-types";

const initState = {
    hidden: false
}

const dropdownReducer = (state = initState, action) => {
    if(action.type == TOGGLE_DROPDOWN){
        return{
            ...state,
            hidden: !state.hidden
        }
    }
    return state
}

export default dropdownReducer 