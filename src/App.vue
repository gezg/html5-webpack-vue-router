<template>
  <div id="app">
    <jc-header class="header"></jc-header>
    <main class="main">
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
    </main>
    <jc-footer class="footer"></jc-footer>
  </div>
</template>

<script>

import JcHeader from "@/components/layout/header.vue";
import JcFooter from "@/components/layout/footer.vue";

export default {
  name: 'app',
  components: {
    JcHeader,
    JcFooter
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
  overflow-y: auto;
}

.main{
  margin: 50px 0;
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
