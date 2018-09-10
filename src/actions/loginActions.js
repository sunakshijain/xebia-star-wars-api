import { login } from '../services/login.js'
import actionType from './actionTypes'
export function loginUser({ userName, password }) {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.LOGIN_REQUEST
        })
        try {
            const loginData = await login({ userName, password });
            const { results } = loginData.data;
            const [userData] = results;
            const { name, birth_year } = userData;
            if (name !== userName || birth_year !== password) {
                return dispatch({
                    type: actionType.LOGIN_FAILURE,
                })
            }
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload: userData
            })
        }
        catch (e) {
            return dispatch({
                type: actionType.LOGIN_FAILURE,
            })
        }
    }
}