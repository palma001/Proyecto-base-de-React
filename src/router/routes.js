import { validationSession, validationNotSession } from './validations-router'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), beforeEnter: validationSession, },
      { path: 'users', name: 'User', component: () => import('pages/UserPage.vue'), beforeEnter: validationSession, },
    ]
  },

  {
    path: '/login',
    name: 'Login',
    beforeEnter: validationNotSession,
    component: () => import('pages/LoginPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
