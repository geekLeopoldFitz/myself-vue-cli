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

export function getInfo() {
  return request({
    url: '/myself_vue_cli/user/login/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/myself_vue_cli/user/login/logout',
    method: 'delete'
  })
}
