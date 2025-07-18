import axios from 'axios';

// This is how you can keep on developing axios instance and this can  be the custom api.js which
// is having the Global configuration for the api request that we are doing including the base url

// Tomorrow if anything changing in the api, if any headers are needed , you have to just make the change at 
// one place And this instance api.js will be used at all the places. so, tomorrow if we have 50 componenets, this
// this is waht is going to used in 50 components, so you don't have to change in the 50 componets. You handle it ones 
// and it's taken care

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization':'Bearer <TOKEN>',
    'Content-Type':'application/json'
  }
});

api.interceptors.request.use((request) => {
  console.log("Starting request ", request);
  return request;
},
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    console.error('Request Error ', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  // sucess check, return data
  return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorised');
    }
    if (error.response && error.response.status === 401) {
      console.error('Server Error!');
    }
    return Promise.reject(error);
  }  
);

export default api;