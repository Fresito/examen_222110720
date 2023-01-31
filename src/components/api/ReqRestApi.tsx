
import axios from 'axios'

export const ReqRestApi = axios.create({
    baseURL: `https://restcountries.com/v2/all`
});
