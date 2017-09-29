<template>
<div class="info-wrap">
   
    <mt-swipe :auto="0" class="slide" v-if="info4RtxPicList.length">
        <mt-swipe-item v-for="pic in info4RtxPicList" :key="pic.id">
            <router-link :to="'uploader'">
            <img :src="'http://'+pic.picUrl" :alt="pic.title" class="stick">
            </router-link>
        </mt-swipe-item>
       
    </mt-swipe>

    <div class="normal">
        <mt-navbar v-model="selected" class="nav-list"> 
            <mt-tab-item v-for="app in column4RtxList" :id="app.id" :key="app.id" >{{app.name}}</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
         <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <div class="page-infinite-list" 
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="60">
                <mt-cell v-for="info in info4RtxList" 
                    :key="info.id" 
                    :title="info.title" 
                    :label="parseTimeDate(info.createDate)" 
                    is-link 
                    :to="'detail/'+info.id"
                ></mt-cell>
            </div>
             <p v-if="loading" class="page-infinite-loading">
            <mt-spinner color="#26a2ff"></mt-spinner>
            加载中...
        </p>
        </div>
       
    </div>
    <router-link :to="'calendar'">
        <mt-palette-button
            content="待办事项"
            direction="rt" 
            class="pb" 
            :radius="80" 
            ref="target_1" 
            mainButtonStyle="color:#fff;background-color:#26a2ff;font-size:12px;"
            style="right:30px;z-index:9999;">
            <div class="my-icon-button indexicon icon-popup"></div>
        </mt-palette-button>
    </router-link>
</div>
</template>

<script>

import Api from '@/libs/api';

import Util from '@/libs/util.js';

export default {
    data() {
        return {
            selected: '',
             //带有图片的信息
            info4RtxPicList:[],
            // 信息栏目列表
            column4RtxList: [],
            //默认第一个栏目下的信息
            info4RtxList: [],
            //加载数据的loading
            loading: false,
            //控制容器的高度
            wrapperHeight: 200
        }
    },
    methods: {
        loadMore: function(){
            console.log('加载更多......');
            let _this = this;
            if(!_this.loading){
               // _this.loading = true;
                setTimeout(()=>{
                    _this.$refs.wrapper.scrollTop = _this.$refs.wrapper.scrollTop - 50;
                    _this.loading = false;
                },2000);
            }
        },
        parseData: function(dataList){
            this.info4RtxPicList = dataList.info4RtxPicList;
            this.info4RtxList = dataList.info4RtxList;
            this.column4RtxList = dataList.column4RtxList;
            this.selected = this.column4RtxList[0].id;
        },
        parseTimeDate: function(stamp){
            return Util.format(new Date(stamp) ,'yyyy-MM-dd');
        }
    },
    mounted() {
        var _this = this;
        //请求列表数据
        Api.getInfoAll().then(function(res) {
            if(res.data.code === '000000'){
                _this.parseData(res.data.body);
            }
             _this.$nextTick(()=>{
                _this.wrapperHeight = document.documentElement.clientHeight - _this.$refs.wrapper.getBoundingClientRect().top
            });
        }).catch(function(error) {
            console.log('请求失败......');
        });
    }
}

</script>

<style>
.page-infinite-wrapper{
    height: 200px;
    overflow-y:scroll;  
    -webkit-overflow-scrolling:touch;
}
.mint-swipe-indicator{
    background: #d0baba;
}
.normal{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.slide {
    flex-basis: 200px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 8px;
    background-color: #fff;
}
.slide .stick{
    height: 182px;
    width: 100%;
}
.content{
    flex: 1;
    overflow-y: auto;
}
.mint-swipe ,.mint-swipe-items-wrap ,.mint-swipe-items-wrap > div{
    height:200px;
}
.pb {
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #FFF;
    position: absolute;
    bottom: 30px;
}
.mint-tab-item-label{
    min-width: 100px;
    font-size: 16px;
}
.mint-navbar{
    border-bottom: 1px solid #ccc;
    overflow-x: auto;
    overflow-y: hidden;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.mint-navbar::-webkit-scrollbar{
	width: 16px;
	height: 0;
	background-color: #F5F5F5;
}

/*定义滚动条轨道 内阴影+圆角*/
.mint-navbar::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

/*定义滑块 内阴影+圆角*/
.mint-navbar::-webkit-scrollbar-thumb{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
.mint-cell:first-child .mint-cell-wrapper{
    background-image: none;
}
 @component-namespace page {
    @component infinite {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }
      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
.page-infinite-loading{
    display: flex;
    justify-content: center;
    margin:0;
    padding-bottom: 50px;
}
</style>
