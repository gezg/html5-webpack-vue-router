<template>
    <div class="normal">
        <div class="title">
            <h2>{{info.title}}</h2>
            <span>{{info.author_unit}}</span> <span>{{info.author}}</span> <span class="date">{{info.sendTime}}</span>
        </div>
        <div class="journalism-content" v-html="info.infoContent"></div>
    </div>
</template>

<script>

import Api from '@/libs/api';

import { Toast } from 'mint-ui';

export default {
    beforeRouteEnter(to, from, next){
        next(vm=>{
            vm.getDetail();
        })
    },
    data(){
        return {
            info: {}
        }
    },
    methods: {
        getDetail: function(){
            let _this = this;
            if(this.$route.params && this.$route.params.id){
                let id = this.$route.params.id;
                Api.getInfoById(id).then(function(res) {
                    if(res.data.code === '000000'){
                        _this.$set(_this, 'info', res.data.body);
                    }else{
                        Toast({message: '请求数据的id是: ' +id+ ' 响应结果: '+res.data.errormsg});
                    }
                }).catch(function(error) {
                    Toast({message: '请求数据的id是: ' +id+ ' 请求失败!!!'});
                });
            }
        }
    }
}
</script>

<style>
    .title{
        height: 160px;
        font-size: 17px;
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
    .title h2{
        margin: 0;
        line-height: 40px;
    }
    .title span {
        color: #c5c5c5;
        font-size: 14px;
        margin: 0 5px;
    }
    .title .date{
        float: right;
    }
    .normal p{
        text-indent: 2em;
    }
    .journalism-content{
        padding: 8px;
    }

    .normal .img img{
        width: 100%;
    }
</style>
