//依赖jcmp的库
import jcmp from '../jcmp.js';
//http插件
import axios from 'axios';

const REQROOTPATH = 'http://192.168.140.10:8080';

const HTTP = axios.create({
    baseURL: REQROOTPATH,
    //timeout: 5000,
    headers: {
        'client_app_id': jcmp._appId(),
        'client_device_id': jcmp._deviceId(),
        'access_token': jcmp._jcmpToken()
    },
    params: {},
    data: {}
});


// 添加请求拦截器
HTTP.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export { HTTP };