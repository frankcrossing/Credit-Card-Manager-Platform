import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user',
    name: 'User',
    meta: { title: '会员管理', icon: 'example' },
    children: [
      {
        path: 'userquery',
        name: 'Userquery',
        component: () => import('@/views/user/userquery/index'),
        meta: { title: '会员查询', icon: 'watch' }
      },
      {
        path: 'detailinfo',
        name: 'Detailinfo',
        component: () => import('@/views/user/detailinfo/index'),
        meta: { title: '详情信息', icon: 'watch' },
        hidden: true
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('@/views/user/feedback/index'),
        meta: { title: '会员反馈', icon: 'watch' }
      }
    ]
  },

  {
    path: '/plan',
    component: Layout,
    redirect: '/plan',
    name: 'Plan',
    meta: { title: '计划管理', icon: 'example' },
    children: [
      {
        path: 'planquery',
        name: 'Planquery',
        component: () => import('@/views/plan/planquery/index'),
        meta: { title: '计划查询', icon: 'skill' }
      },
      {
        path: 'plandetail',
        name: 'Plandetail',
        component: () => import('@/views/plan/plandetail/index'),
        meta: { title: '计划详情', icon: 'watch' },
        hidden: true
      }
    ]
  },

  {
    path: '/agent',
    component: Layout,
    redirect: '/agent',
    name: 'Agent',
    meta: { title: '代理人管理', icon: 'example' },
    children: [
      {
        path: 'agentmanage',
        name: 'Agentmanage',
        component: () => import('@/views/agent/agentmanage/index'),
        meta: { title: '代理人管理', icon: 'skill' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: '系统管理',
    meta: { title: '系统管理', icon: 'example' },
    hidden: true,
    children: [
      {
        path: 'managechar',
        name: '角色管理',
        component: () => import('@/views/system/managechar/index'),
        meta: { title: '角色管理', icon: 'watch', noCache: false }
      },
      {
        path: 'managecontrol',
        name: '操作员管理',
        component: () => import('@/views/system/managecontrol/index'),
        meta: { title: '操作员管理', icon: 'watch', noCache: false }
      },
      {
        path: 'manageaccess',
        name: '权限管理',
        component: () => import('@/views/system/manageaccess/index'),
        meta: { title: '权限管理', icon: 'watch', noCache: false }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    hidden: true,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    name: 'form',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Formindex',
        component: () => import('@/views/form/index'),
        meta: { title: '表单组件示例', icon: 'form' }
      }
    ]
  },

  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import('@/views/guide/index'),
        meta: { title: 'Guide', icon: 'guide' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    hidden: true,
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  base: '/uranus/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
