import Api from '@api/Api'

export const state = {
  currentUser: getSavedState('auth.currentUser'),
  currentSession: getSavedState('auth.currentSession'),
}

export const getters = {
  loggedIn: function(state) {
    return !!state.currentUser
  },
  currentUser: function(state) {
    return state.currentUser || null
  },
  userEmail: function(state) {
    return (state.currentUser && state.currentUser.email) || null
  },
  userId: function(state) {
    return (state.currentUser && state.currentUser.id) || null
  },
  userLocale: function(state) {
    return (state.currentUser && state.currentUser.locale) || null
  },
  userName: function(state) {
    return (state.currentUser && state.currentUser.name) || null
  },
  apiToken: function(state) {
    return (state.currentUser && state.currentUser.api_token) || null
  },
}
export const mutations = {
  SET_API_TOKEN: function(state, newValue) {
    state.currentUser.api_token = newValue
    saveState('auth.currentUser.api_token', newValue)
  },
  SET_CURRENT_USER: function(state, newValue) {
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
  },
  SET_LOCALE: function(state, newValue) {
    state.currentUser.locale = newValue
    saveState('auth.currentUser.locale', newValue)
  },
}
export const actions = {
  signIn: function({ commit, dispatch, getters }, credentials = {}) {
    if (getters.loggedIn) return dispatch('validateUser')

    return Api.postRequest('/login', credentials).then((response) => {
      const user = response.data
      commit('SET_CURRENT_USER', user)
      return user
    })
  },
  signOut: function({ _, commit, getters }) {
    if (!getters.loggedIn) {
      throw new Error('User is already logged out.')
    }

    commit('SET_CURRENT_USER', null)
    return null
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validateUser: function({ state, commit, dispatch }) {
    return (
      state.currentUser ||
      Api.postRequest('/authenticate')
        .then((response) => {
          const user = response.data
          commit('SET_CURRENT_USER', user)
          return user
        })
        .catch((error) => {
          if (error.response && error.response.status === 401)
            return dispatch('signOut')
        })
    )
  },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
  // use LocalStorage, could use cookie, opinions vary, see also:
  // https://auth0.com/docs/tokens/guides/store-tokens
  window.localStorage.setItem(key, JSON.stringify(state))
}

function getSavedState(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (err) {
    return undefined
  }
}
