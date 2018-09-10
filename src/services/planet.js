import axios from 'axios'
import config from '../util/config'

export async function fetchPlanetsService(page, searchTerm) {
    var result = await axios.get(`${config.baseUrl}planets?page=${page}&search=${searchTerm}`)
    return result;
}