
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const dynamicRoutes = [
  {
    alwaysShow: true,
    children: [
      {
        component: 'system/user/index',
        hidden: false,
        meta: { icon: 'peoples', noCache: true, title: '用户管理' },
        name: 'User',
        path: 'user'
      },
      {
        component: 'system/role/index',
        hidden: false,
        meta: { icon: 'role', noCache: true, title: '角色管理' },
        name: 'Role',
        path: 'role'
      },
      {
        component: 'system/menu/index',
        hidden: false,
        meta: { icon: 'menu', noCache: true, title: '菜单管理' },
        name: 'Menu',
        path: 'menu'
      },
      {
        component: 'system/dept/index',
        hidden: false,
        meta: { icon: 'dept', noCache: true, title: '部门管理' },
        name: 'Dept',
        path: 'dept'
      },
      {
        component: 'system/job/index',
        hidden: false,
        meta: { icon: 'Steve-Jobs', noCache: true, title: '岗位管理' },
        name: 'Job',
        path: 'job'
      },
      {
        component: 'system/timing/index',
        hidden: false,
        meta: { icon: 'timing', noCache: true, title: '任务调度' },
        name: 'Timing',
        path: 'timing'
      }
    ],
    component: 'Layout',
    hidden: false,
    meta: { icon: 'system', noCache: true, title: '系统管理' },
    name: '系统管理',
    path: '/system',
    redirect: 'noredirect'
  },
  {
    alwaysShow: true,
    children: [
      {
        component: 'monitor/online/index',
        hidden: false,
        meta: { icon: 'Steve-Jobs', noCache: true, title: '在线用户' },
        name: 'OnlineUser',
        path: 'online'
      },
      {
        component: 'monitor/log/index',
        hidden: false,
        meta: { icon: 'log', noCache: false, title: '操作日志' },
        name: 'Log',
        path: 'logs'
      },
      {
        component: 'monitor/log/errorLog',
        hidden: false,
        meta: { icon: 'error', noCache: true, title: '异常日志' },
        name: 'ErrorLog',
        path: 'errorLog'
      }
    ],
    component: 'Layout',
    hidden: false,
    meta: { icon: 'monitor', noCache: true, title: '系统监控' },
    name: '系统监控',
    path: '/monitor',
    redirect: 'noredirect'
  }
]

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/myself_vue_cli/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 400,
          message: '帐号和密码错误.'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/myself_vue_cli/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 400,
          message: '登录失败，无法获取用户详细信息.'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/myself_vue_cli/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  },

  // 获取动态路由
  {
    url: '/myself_vue_cli/user/getDynamicRoutes',
    type: 'post',
    response: config => {
      const routes = dynamicRoutes

      // mock error
      if (!routes) {
        return {
          code: 400,
          message: '路由数据获取失败'
        }
      }

      return {
        code: 200,
        data: routes
      }
    }
  }
]
