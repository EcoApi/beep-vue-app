import createResource from '@utils/store/vuex-resource'
import * as Api from '@api/hives.js'

const resource = createResource({ path: 'hives' })

export const state = {
  ...resource.state,
  edited: false,
  activeHive: null,
  activeHiveId: null,
}
export const getters = {
  ...resource.getters,
  activeHive: (state) => {
    return state.activeHive
  },
  activeHiveId: (state) => {
    return state.activeHiveId
  },
  hives: (state) => {
    return state.data.hives || []
  },
  hiveEdited: (state) => {
    return state.edited
  },
  getHivesForApiary: (state) => (apiaryId) => {
    return (
      (state.data.hives &&
        state.data.hives.filter((hive) => hive.location_id === apiaryId)) ||
      []
    )
  },
}
export const mutations = {
  ...resource.mutations,
  setEdited: function(state, bool) {
    state.edited = bool
  },
  setActiveHive: function(state, hive) {
    state.activeHive = hive
  },
  setActiveHiveId: function(state, id) {
    state.activeHiveId = id
  },
}
export const actions = {
  ...resource.actions,
  findAll: function({ _ }) {
    const hives = resource.endpoint.index()
    if (hives) {
      // commit('SET_HIVES', hives);
      return hives
    }
    return false
  },
  findById: function({ commit }, id) {
    commit('setEdited', false)
    return resource.endpoint.read(id)
  },
  saveHiveSettings: function({ _ }, hive) {
    const id = hive.id
    return Api.saveHiveSettings(id, hive)
    // .then(() => {
    //   return true
    // })
    // .catch((error) => {
    //   // Error 😨
    //   if (error.response) {
    //     /*
    //      * The request was made and the server responded with a
    //      * status code that falls out of the range of 2xx
    //      */
    //     console.log(error.response.data)
    //     console.log(error.response.status)
    //     console.log(error.response.headers)
    //   } else if (error.request) {
    //     /*
    //      * The request was made but no response was received, `error.request`
    //      * is an instance of XMLHttpRequest in the browser and an instance
    //      * of http.ClientRequest in Node.js
    //      */
    //     console.log(error.request)
    //   } else {
    //     // Something happened in setting up the request and triggered an Error
    //     console.log('Error', error.message)
    //   }
    //   console.log(error)
    // })
  },
  deleteHive: function({ _ }, id) {
    return Api.deleteHive(id)
  },
}
