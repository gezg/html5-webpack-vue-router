//http插件
import axios from 'axios';
//获取配置信息
import config from '../../../config';

const REQROOTPATH = 'http://'+config.dev.ip+':'+config.dev.port+'/server/';

const HTTP = axios.create({
    baseURL: REQROOTPATH,
    //timeout: 5000,
    params: {},
    data: {}
});

// 添加请求拦截器
HTTP.interceptors.request.use(function (config) {
    if(config.method.toLocaleLowerCase() === 'get'){
        config.params.userId = '200004';
    }
    if(config.method.toLocaleLowerCase() === 'post'){
        config.data.userId = '200004';
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


export { HTTP };