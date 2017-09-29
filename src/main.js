import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import store from './store';
import Vuex from 'vuex';
import FastClick from 'fastclick';

import '@/assets/sass/base.scss';

Vue.use(Mint);

Vue.config.productionTip = false


FastClick.attach(document.body);
/* 初始化 */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
    // template: '<App/>',
    // components: { App }
})
