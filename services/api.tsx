import axios from 'axios';
import appConfig from '../app.json';

const api = axios.create({
    baseURL: appConfig.uris.api,
});

export default api;