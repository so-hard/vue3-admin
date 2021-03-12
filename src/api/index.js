import axios from 'axios'

export const Axios  =  axios.create({
  baseURL:'/api'
})

Axios.interceptors.request.use(config=> {
  let Authorization = localStorage.getItem('Authorization')
  if(localStorage.getItem('Authorization')) {
    config.headers.Authorization = Authorization;
  }
  return config
},err => {
  return Promise.reject(err)
})

Axios.interceptors.response.use(res=> {
  // console.log(res)
  if(res.status === 200){
    return res.data
  }else {
    throw err
  }
},err => {
  return err
})