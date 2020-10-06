import axios from './axios'

class Api {
  createRequest(url, payload) {
    return axios.post(url, payload)
  }

  readRequest(url, id = null) {
    return axios.get(url + id)
  }

  updateRequest(url, id, payload) {
    return axios.patch(url + id, payload)
  }

  deleteRequest(url, id) {
    return axios.delete(url + id)
  }
}

export default new Api()
