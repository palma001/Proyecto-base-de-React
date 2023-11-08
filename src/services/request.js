import { api } from "src/boot/axios"
import { authentication } from 'stores/module-authentication';

export default {
  get: async (url, params) => {
    try {
      const { data } = await api.get(url, { params })
      return data
    } catch (error) {
      console.log(error)
    }
  },
  post: async (url, params) => {
    const store = authentication()
    try {
      const { data } = await api.post(url, {
        ...params,
        user_created_id: params.user_created_id || store.user.id
      })
      return data
    } catch (error) {
      console.log(error)
    }
  },
  put: async (url, params) => {
    const store = authentication()
    try {
      const { data } = await api.put(url, {
        ...params,
        user_update_id: params.user_update_id || store.user.id
      })
      return data
    } catch (error) {
      console.log(error)
    }
  },
  delete: async (url) => {
    try {
      const { data } = await api.delete(url)
      return data
    } catch (error) {
      console.log(error)
    }
  }
}
