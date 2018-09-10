
import actionType from '../actions/actionTypes'
const _initialState = {
    showLoading: false,
    isLoggedIn: false,
    isError: false,
    data:{}
}
const login = (state = _initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return { ...state, showLoading: true }
        case actionType.LOGIN_SUCCESS:
            return { ...state, showLoading: false, isLoggedIn: true, data: action.payload }
        case actionType.LOGIN_FAILURE:
            return { ...state, showLoading: false, isError: true }
        default:

    }
    return state
}

export default login