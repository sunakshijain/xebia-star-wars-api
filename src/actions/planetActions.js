import { fetchPlanetsService } from '../services/planet.js'
import actionType from './actionTypes'
async function fetchPlanetsData(state) {
    const { planet: { currentPage, searchTerm } } = state;
    const planetsData = await fetchPlanetsService(currentPage, searchTerm);
    const { results, count } = planetsData.data;
    return {
        type: actionType.FETCH_PLANET_SUCCESS,
        payload: { results, count }
    }
}
export function fetchPlanets(searchTerm = '') {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_PLANET_REQUEST,
            payload: searchTerm
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_PLANET_FAILURE,
            })
        }
    }
}
export function fetchNextPlanets() {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_NEXT_PLANET_REQUEST
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_NEXT_PLANET_FAILURE,
            })
        }
    }
}
export function fetchPrevPlanets() {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_PREV_PLANET_REQUEST
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_PREV_PLANET_FAILURE,
            })
        }
    }
}

export function getPlanet(id) {
    return async (dispatch, getState) => {
        const { planet: { planets } } = getState();
        const currentPlanet = planets.filter(p => {
            return p.url.split('/')[5] === id
        })[0]
        dispatch({
            type: actionType.FETCH_PLANET_BY_ID,
            payload: currentPlanet
        })
    }
}
