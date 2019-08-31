import request from '@/utils/request'

export function planInfoList(query) {
  return request({
    url: '/plan/planInfoList',
    method: 'post',
    data: query
  })
}

export function planDetailInfoList(planNo) {
  const formData = new FormData()
  formData.append('planNo', planNo)
  return request({
    url: '/plan/planDetailInfoList',
    method: 'post',
    data: formData
  })
}
