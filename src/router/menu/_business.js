// [业务演示] 菜单
export const menu = {
  title: '示例界面',
  path: '/demo/business',
  name: 'demo-business',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: ''
  // },
  children: [
    // 页面容器
    {
      title: '页面容器',
      icon: 'flask',
      children: [
        {
          title: '卡片',
          icon: 'file-o',
          path: 'container/normal',
          name: 'demo-business-container-normal',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/business/container/normal.vue'], resolve) }
        }
      ]
    }
  ]
}

// [业务演示] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
