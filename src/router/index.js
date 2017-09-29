/**
 * 路由配置文件
 */
import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';


Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/info'
        },{
            path: '/detail/:id',
            name: 'Detail',
            component: resolve => require(['@/pages/com/detail.vue'], resolve),
            meta: {
                title: '部门页面'
            }
        },{
            path: '/info',
            name: 'Info',
            component: resolve => require(['@/pages/index.vue'], resolve),
            meta: {
                title: '信息管理'
            }
        },{
            path: '/uploader',
            name: 'Uploader',
            component: resolve => require(['@/pages/com/exmaple/uploader.vue'], resolve),
            meta: {
                title: '待办管理'
            }
        },{
            path: '/calendar',
            name: 'Calendar',
            component: resolve => require(['@/pages/com/exmaple/calendar.vue'], resolve),
            meta: {
                title: '日历控件'
            }
        },{
            path: '/picker',
            name: 'Pciker',
            component: resolve => require(['@/pages/com/picker.vue'], resolve),
            meta: {
                title: '日期控件'
            }
        }
    ]
});
//跳转到每个组件下时候,修改当前title, 在微信或RTX中可以直接显示在menubar中
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title;
    //移动端如果使用异步组件加载那么还是需要一点等待时间的，在网络慢时等待时间会更长。显示Loading状态缓解一下用户等待情绪就十分重要。
    store.commit('updateLoadingStatus', {isLoading: true})
    next();
});

router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false})
})

export default router;
