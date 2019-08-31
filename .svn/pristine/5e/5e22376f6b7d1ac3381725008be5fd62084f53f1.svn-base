import { getAllOptions } from '@/api/common'

const state = {
  deviceTypes: [],
  sources: [],
  citys: []
}

const mutations = {
  SET_DEVICETYPES: (state, deviceTypes) => {
    state.deviceTypes = deviceTypes
  },
  SET_SOURCES: (state, sources) => {
    state.sources = sources
  },
  SET_CITYS: (state, citys) => {
    state.citys = citys
  }
}

const actions = {
  getAllOptions({ commit }) {
    return new Promise((resolve, reject) => {
      getAllOptions().then(response => {
        const { data } = response

        if (!data) {
          reject('系统关键数据未正常加载，请重新登录')
        }

        const { deviceTypes, sources, citys } = data

        commit('SET_DEVICETYPES', deviceTypes)
        commit('SET_SOURCES', sources)
        commit('SET_CITYS', citys)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  resetCommonInfo({ commit }) {
    return new Promise(resolve => {
      commit('SET_DEVICETYPES', [])
      commit('SET_SOURCES', [])
      commit('SET_CITYS', [])
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
