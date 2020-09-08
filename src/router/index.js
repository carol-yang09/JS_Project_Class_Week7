import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  // 登入頁面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    // name: 'Dashboard',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'productsmanage',
        name: 'ProductsManage',
        component: () => import('../views/admin/ProductsManage.vue'),
      },
      {
        path: 'couponsmanage',
        name: 'CouponsManage',
        component: () => import('../views/admin/CouponsManage.vue'),
      },
      {
        path: 'ordersmanage',
        name: 'OrdersManage',
        component: () => import('../views/admin/OrdersManage.vue'),
      },
      {
        path: 'storagesmanage',
        name: 'StoragesManage',
        component: () => import('../views/admin/StoragesManage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
});

export default router;
