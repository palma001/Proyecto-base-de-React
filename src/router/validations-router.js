import { authentication } from 'stores/module-authentication';
import { api } from 'src/boot/axios'


export const validationSession = async (to, from, next) => {
  const $store = authentication()
  api.defaults.headers.common.authorization = `${localStorage.getItem('tokenType')} ${localStorage.getItem('token')}`
  const validation = await $store.initStore()
  if (!validation) return next('/login')
  const roles = JSON.parse(localStorage.getItem('user')).roles
  const modules = []
  roles.forEach(role => {
    role.modules.forEach(module => {
      modules.push(module)
    })
  })
  const moduleFind = modules.find(module => module.route === to.name)
  const root = localStorage.getItem('root')
  if (from.name === 'login') {
    return next()
  }
  return root ? next() : moduleFind ? next() : next('*')
}

export const validationNotSession = async (to, from, next) => {
  const $store = authentication()
  const validation = await $store.initStore()
  console.log(validation)
  // if (validation) {
  //   return next('/')
  // }
  next()
}
