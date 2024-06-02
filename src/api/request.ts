import axios from 'axios';

// 配置向 fts demo server 的請求
const request = axios.create({
    baseURL:'/demo',
    timeout: 60000
})

// 預設允許跨域
request.defaults.withCredentials = true

// request 前處理
request.interceptors.request.use(config => {
    // 從 local storage 中讀取 jwt token 帶入 header ( 若有的話 )
    let jwtToken : string | null = localStorage.getItem('JwtToken')
    if(jwtToken != null)
        config.headers.set("JwtToken", jwtToken)
    return config
})

// response 統一包成 Promise
request.interceptors.response.use(response => {
    return response
}, error => {
    console.log('request status : ' + error.response.status)
    console.log('request error : ' + error.message)
    return Promise.reject('Error : ' + error)
})


export default request;