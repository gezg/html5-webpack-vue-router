/**
 * 路由配置文件
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/hello.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/user',
      name: 'User',
      component: resolve => require(['@/components/user.vue'], resolve),
      meta: {
        title: '用户页面'
      }
    },
    {
      path: '/dept',
      name: 'Dept',
      component: resolve => require(['@/components/com/dept.vue'], resolve),
      meta: {
        title: '部门页面'
      }
    }
  ]
});
//跳转到每个组件下时候,修改当前title, 在微信或RTX中可以直接显示在menubar中
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});


export default router;
