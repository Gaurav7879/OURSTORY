import axios from 'axios'


const API = axios.create({ baseURL: 'http://a3380184c153e4268b9d0ddc63b9d7db-184651913.ap-south-1.elb.amazonaws.com' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);
