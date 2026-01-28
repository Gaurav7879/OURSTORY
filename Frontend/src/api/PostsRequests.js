import axios from 'axios'


const API = axios.create({ baseURL: 'http://a3380184c153e4268b9d0ddc63b9d7db-184651913.ap-south-1.elb.amazonaws.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`posts/${id}/like`, {userId: userId})
