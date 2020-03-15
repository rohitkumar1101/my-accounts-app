import { TOGGLE_DROPDOWN } from "../constants/action-types";

export const toggleDropDown = () => dispatch => {
    dispatch({
        type: TOGGLE_DROPDOWN,
    })
}