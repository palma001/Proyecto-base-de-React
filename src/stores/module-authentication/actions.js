import { api } from '../../boot/axios'
import { authentication } from 'stores/module-authentication';


const login = async ({ username, password })  =>{
  try {
    const store = authentication()
    const { data } = await api.post('authentication/login', { username, password })
    store.$patch((state) => {
      state.expiresIn = data.expires_in * 1000
      state.token = data.access_token
      state.user = data.user
      state.tokenType = data.token_type
      state.refreshToken = data.refresh_token
    })
    autoLogout(data.expires_in * 1000)
    return data.user
  } catch (error) {
    console.log(error)
    throw error
  }
}

const logout = async () => {
  try {
    await api.post('authentication/logout')
  } catch (error) {
    console.log(error)
  }
  localStorage.removeItem('refreshToken')
}

const getRefreshToken = async (refreshToken) => {
  try {
    const store = authentication()
    const { data } = await api.post('authentication/refresh-token', {
      refresh_token: refreshToken
    })
    store.$patch((state) => {
      state.expiresIn = data.expires_in * 1000
      state.accessToken = data.access_token
      state.refreshToken = data.refresh_token
    })
    autoLogout(data.expires_in * 1000)
  } catch (error) {
    console.log(error)
    throw error
  }
}

const autoLogout = (expiresIn) => {
  const store = authentication()
  const timeOut = setTimeout(() => {
    store.$patch((state) => {
      state.expiresIn = null
      state.accessToken = null
    })
  }, Number(expiresIn))
  commit('setTimeOut', timeOut)
}

const initStore = async () => {
  const store = authentication()
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token') === 'null' ? null : localStorage.getItem('token')
  const tokenType = localStorage.getItem('tokenType')
  const refreshToken = localStorage.getItem('refreshToken')
  const timeOut = localStorage.getItem('timeOut')
  const expiresIn = localStorage.getItem('expiresIn')
  const invalidUser = user === null || token === null || tokenType === null
  if (invalidUser) {
    return false
  }
  store.$patch((state) => {
    state.expiresIn = expiresIn
    state.token = token
    state.user = user
    state.refreshToken = refreshToken
  })
  clearTimeout(timeOut)
  autoLogout(Number(expiresIn))
  return true
}

export default {
  login,
  logout,
  getRefreshToken,
  autoLogout,
  initStore
}
