import axios from 'axios'


const API = axios.create({ baseURL: 'http://a3380184c153e4268b9d0ddc63b9d7db-184651913.ap-south-1.elb.amazonaws.com' });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);
