import axios from 'axios'


const API = axios.create({ baseURL: 'http://a3380184c153e4268b9d0ddc63b9d7db-184651913.ap-south-1.elb.amazonaws.com' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
