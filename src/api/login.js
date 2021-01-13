import request from '@/utils/request'

export function login(username, password, code, uuid) {
  return request({
    url: '/myself_vue_cli/user/login',
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/myself_vue_cli/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/myself_vue_cli/user/logout',
    method: 'post'
  })
}
