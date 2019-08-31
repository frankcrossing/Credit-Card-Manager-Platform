import request from '@/utils/request'
// 管理员用户
export function login(data) {
  return request({
    url: '/manageuser/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/manageuser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/manageuser/logout',
    method: 'post'
  })
}

// 客户信息
export function pagedUserInfo(query) {
  return request({
    url: '/user/pagedUserInfo',
    method: 'post',
    data: query
  })
}

export function userBaseInfoReport(userId) {
  const formData = new FormData()
  formData.append('userId', userId)
  return request({
    url: '/user/userBaseInfoReport',
    method: 'post',
    data: formData
  })
}

export function userBindInfo(userId) {
  const formData = new FormData()
  formData.append('userId', userId)
  return request({
    url: '/user/userBindInfo',
    method: 'post',
    data: formData
  })
}

export function pagedUserFeedback(query) {
  return request({
    url: '/user/pagedFeedBack',
    method: 'post',
    data: query
  })
}

export function deleteUserFeedback(idList) {
  return request({
    url: '/user/deleteUserFeedback',
    method: 'post',
    data: idList
  })
}

export function pagedSystemAccess(query) {
  return request({
    url: '/system/pagedAccess',
    method: 'post',
    data: query
  })
}

export function pagedSystemUser(query) {
  return request({
    url: '/system/pagedUser',
    method: 'post',
    data: query
  })
}
