var express = require('express');
var Mock = require('mockjs');
var fs = require('fs');
var path = require('path');
var router = express.Router();
 
function readFileJSON(__path, res) {
    var reslut = {};
    fs.readFile(path.join(__dirname ,__path) , function(err, data) {
        if (err) {
            data = '查询失败';
        }
        res.json(data.toString());
    });
}

function readFileText(__path, res) {
    fs.readFile(__dirname + __path, function(err, data) {
        if (err) {
            data = null;
        }
        res.send(data.toString());
    });
}
 
//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/getMap.action', function(req, res, next) {
    readFileJSON('map.json', res);
});
 
 
/* test GET*/
router.get('/getList.action', function(req, res, next) {
    var reslut = [];
    for (var i = 0; i < 10; i++) {
        var name = Mock.Random.cname();
        // 使用 Mock
        var data = Mock.mock({
            name: name, //名称随机
            url: Mock.Random.url('http'), //网址
            city: Mock.Random.county(true), //地址
            date: Mock.Random.date('yyyy-MM-dd'), //日期
            img: Mock.Random.image('30x30', '#02adea', name.substring(0,1)), //头像
            zip: Mock.Random.zip(), //邮编
        });
        reslut.push(data);
    }
    res.send(JSON.stringify(reslut))
});

/* test POST */
router.post('/save.action', function(req, res) {
    var reslut = {
        code : 1,
        msg: '请求失败',
        data: ''
    }

    if(req.body && req.body.formJson){
        reslut.code = 0;
        reslut.msg = '成功';
        reslut.data = req.body.formJson;
    }
    res.send(JSON.stringify(reslut))
});
 
module.exports = router;