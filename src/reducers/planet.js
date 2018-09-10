
import actionType from '../actions/actionTypes'
const _initialState = {
    isLoading: false,
    planets: [],
    currentPage: 0,
    count: 0,
    searchTerm: '',
    title: 'Planets',
    searchCounts: 0,
    searchTime: ''
}
const planet = (state = _initialState, { type, payload }) => {
    switch (type) {
        case actionType.FETCH_PLANET_REQUEST:
            let searchTiming, newSearchCount;
            if (state.searchTime) {
                if ((((new Date() - state.searchTime) % 86400000) % 3600000) / 3600000 > 15) {
                    searchTiming = new Date()
                    newSearchCount = 0
                }
                else {
                    searchTiming = state.searchTime;
                    newSearchCount = state.searchCounts + 1
                }
            }
            else {
                searchTiming = new Date()
                newSearchCount = 0
            }
            return { ...state, showLoading: true, currentPage: 1, searchTerm: payload, searchTime: searchTiming, searchCounts: newSearchCount }
        case actionType.FETCH_PLANET_SUCCESS:
            return { ...state, showLoading: false, planets: payload.results, count: payload.count }
        case actionType.FETCH_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        case actionType.FETCH_NEXT_PLANET_REQUEST:
            return { ...state, showLoading: true, currentPage: state.currentPage + 1 }
        case actionType.FETCH_NEXT_PLANET_SUCCESS:
            return { ...state, showLoading: false, planets: payload.results, count: payload.count }
        case actionType.FETCH_NEXT_PLANET_FAILURE:
        case actionType.FETCH_PREV_PLANET_REQUEST:
            return { ...state, showLoading: true, currentPage: state.currentPage - 1 }
        case actionType.FETCH_PREV_PLANET_SUCCESS:
            return { ...state, showLoading: false, planets: payload.results, count: payload.count }
        case actionType.FETCH_PREV_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        case actionType.SEARCH_PLANET_REQUEST:
            return { ...state, showLoading: true }
        case actionType.SEARCH_PLANET_SUCCESS:
            return { ...state, showLoading: false, planets: payload.results, count: payload.count }
        case actionType.SEARCH_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        case actionType.FETCH_PLANET_BY_ID:
            return { ...state, currentPlanet: payload }
        default:
    }
    return state
}

export default planet