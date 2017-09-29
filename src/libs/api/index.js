//获取访问接口对象
/**
 * 所有接口统一通过此文件调用, 开发环境可以使用jcfe模拟后台服务器接口
 * 运行环境使用使用jcmp来访问接口
 * 
 */
//http请求配置对象
var HTTP;
//判断是否是运行环境, 不是则引用自测http配置文件
if(process.env.NODE_ENV === 'production'){
    HTTP = require('./jcmp.api.js').HTTP;
}else{
    HTTP = require('./jcfe.api.js').HTTP;
}

//http://172.16.3.71:8080/gitbucket/gezg/jc-mobile-interface
/**
 * 暴露给外部的公共接口方法,  对于页面使用者,
 * 应该是不用关心当前的请求是从jcmp调来的数据,还是前端Mock模拟的数据
 */
export default {
    //获取日期页面地图数据
     /**
     * 获取信息页面所有数据
     * @example
     * 
     * api.getMap()
     * .then((res)=>{
     *      res.data === 后台返回的数据
     *      //成功回调
     * })
     * .catch(()=>{
     *      //失败回调
     * })
     */
    getMap(){
        return HTTP.get('/getMap.action');
    },
    //获取RTX的应用接口
    getAppList(){
        return HTTP.get('/app/list?paasId='+PAASID);
    },
    //获取信息页面所有数据
    getInfoAll(){
        return HTTP.get('/getInfoAll.action');
    },
    /**
     * 根据id获取某一条数据详细信息
     */
    getInfoById(id){
        return HTTP.get('/getInfoById.action?id='+id);
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
		return HTTP.all(params);
    }
};