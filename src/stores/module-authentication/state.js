export default {
  accessToken: null,
  refreshToken: null,
  user: JSON.parse(localStorage.getItem('user')),
  expiresIn: null,
  tokenType: null,
  refreshExpiresIn: null,
  sessionExpirationTime: 10
}
