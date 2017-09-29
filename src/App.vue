<template>
  <div id="app">
    <jc-header class="header" v-if="headerState"></jc-header>
    <main :style="{marginTop: headerState ? '50px' : ''}">
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
    </main>
    <!-- 页面切换时执行的动画 -->
    <div class="mint-indicator" v-if="isLoading">
        <div class="mint-indicator-wrapper" style="padding: 15px;">
            <span class="mint-indicator-spin">
                <div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"></div>
            </span> 
           <!--<span class="mint-indicator-text">加载中...</span> -->
        </div> 
    </div>
  </div>
</template>

<script>
import JcHeader from "@/pages/layout/header.vue";
import JcFooter from "@/pages/layout/footer.vue";
//使用状态管理
import {mapState} from 'vuex';

export default {
    name: 'app',
    components: {
        JcHeader,
        JcFooter
    },
    data(){
        return {
            headerState: false
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.JCFE.isLoading
        })
    }
  }
</script>


<style>
  html,body{
    padding: 0;
    margin:0;
    height: 100vh;
    overflow: hidden;
  }

  * {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
  }
  :before,:after {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
  }

  #app {
    color: #2c3e50;
    height: 100vh;
    background: #fff;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .main{
    margin: 0;
  }

  .header .mint-header,.footer{
    height: 50px;
  }
  .footer{
    position:fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }
  .footer .mint-tab-item{
    padding: 10px 0;
  }
</style>
