import axios from 'axios';
import {loadProgressBar} from 'axios-progress-bar';

/**
 * Secure Api process.env.API
 */
const apiSecure = axios.create({
    "baseURL": "http://api.coronanaliz.com"
});

apiSecure.interceptors.request.use(async config => {
    /*const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }*/
    return config;
});


apiSecure.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});
loadProgressBar(null, apiSecure);

export default apiSecure;
