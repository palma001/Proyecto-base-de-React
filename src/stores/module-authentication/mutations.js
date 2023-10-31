const setAccessToken = (state, token) => {
  state.accessToken = token
  localStorage.setItem('token', token)
}

const setRefreshToken = (state, refreshToken) => {
  state.refreshToken = refreshToken
  localStorage.setItem('refreshToken', refreshToken)
}

const setUser = (state, user) => {
  state.user = user
  localStorage.setItem('user', JSON.stringify(user))
}

const setTimeOut = (state, timeOut) => {
  state.timeOut = timeOut
  localStorage.setItem('timeOut', timeOut)
}

const setExpireIn = (state, expiresIn) => {
  state.expiresIn = expiresIn
  localStorage.setItem('expiresIn', expiresIn)
}

const setTokenType = (state, tokenType) => {
  state.tokenType = tokenType
  localStorage.setItem('tokenType', tokenType)
}

const clearAuthData = (state) => {
  state.accessToken = null
  state.refreshToken = null
  state.user = null
}
const logout = (state) => {
  state.accessToken = null
  state.refreshToken = null
  state.expiresIn = null
  state.refreshExpiresIn = null
  state.user = null
  localStorage.clear()
}

export default {
  setAccessToken,
  setRefreshToken,
  setUser,
  setTimeOut,
  setExpireIn,
  setTokenType,
  clearAuthData,
  logout
}
