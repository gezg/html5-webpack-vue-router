//http插件
import axios from 'axios';

//请求目标地址
const REQROOTPATH = 'http://localhost:7080/server/';

const Ajax = axios.create({
	baseURL: REQROOTPATH,
	timeout: 5000,
	// headers: {
	// 	'Content-Type': 'application/x-www-form-urlencoded',
	// }
});

const OUTPUTDEBUG = false;


//添加一个请求拦截器
Ajax.interceptors.request.use(function (config) {
	if(OUTPUTDEBUG){
		console.log('请求拦截器开始工作---> ' ,config);
	}
	//在请求发出之前进行一些操作
	return config;
}, function (err) {
	//Do something with request error
	return Promise.reject(error);
});


//添加一个响应拦截器
Ajax.interceptors.response.use(function (res) {
	if(OUTPUTDEBUG){
		console.log('响应拦截器开始工作---> ' ,res);
	}
	//在这里对返回的数据进行处理
	return res;
}, function (err) {
	//Do something with response error
	return Promise.reject(error);
})

export default {
	/**
	 * 获取地区数据
     * @example
     * 
     * api.getMap()
     * .then(()=>{
     *      //成功回调
     * })
     * .catch(()=>{
     *      //失败回调
     * })
	 */
	getMap(){
		return Ajax.get('getMap.action');
	},
	/**
	 * 测试POST请求
	 * 
	 * @param {any} json 
     * 
     * @example
     * 
     * api.testSave({formJson: ''})
     * .then(()=>{
     *      //成功回调
     * })
     * .catch(()=>{
     *      //失败回调
     * })
	 */
	saveTest(json){
		return Ajax.post('save.action' ,{
			formJson: json
		})
	},
	/**
	 * 所有接口完成回调
	 * @example
	 * api.getAll(api.getMap(),testSave({formJson: ''}))
	 * .then((res)=>{
	 *    res[0]		getMap的响应信息
	 *    res[1]		testSave的响应信息
	 * })
	 * 
	 */
	getAll(...params){
		return axios.all(params);
	}
}