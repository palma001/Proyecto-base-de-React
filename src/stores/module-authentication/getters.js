const getterAccessToken  = (state) => {
  return state.accessToken
}
const refreshTokenGetter = (state) => {
  return state.refreshToken
}

const userGetter = (state) => {
  return state.user
}
const expiresInGetter = (state) => {
  return state.expiresIn
}

export default {
  getterAccessToken,
  refreshTokenGetter,
  userGetter,
  expiresInGetter
}
