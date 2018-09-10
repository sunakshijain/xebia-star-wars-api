import axios from 'axios'
import config from '../util/config'

export async function login({ userName, password }) {
    var result = await axios.get(`${config.baseUrl}people?search=${userName}`)
    return result;
}