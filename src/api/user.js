import {Axios} from './index.js'


export const register = (data) => Axios.post('/v2/user/register',data);

export const sign = data => Axios.post('/v2/user/signIn',data)