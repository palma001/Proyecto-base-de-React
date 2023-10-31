<template>
  <q-form @submit="loginAt" class="flex flex-center" style="height: 100vh">
    <q-card flat class="my-card" style="width: 400px; max-width: 80vw;">
      <!-- <q-card-section class="q-pa-xs">
        <q-img src="logotipo.png"/>
      </q-card-section> -->
      <q-card-section class="bg-primary text-white" style="border-radius: 5px 5px 0px 0px;">
        <div class="text-h6">Iniciar sesión</div>
      </q-card-section>
      <q-card-section :class="!$q.dark.isActive ? 'bg-blue-grey-1' : 'bg-dark'">
        <q-input
          class="q-mt-sm"
          color="primary"
          v-model="username"
          label="Usuario o correo electronico"
          ref="username"
          name="username"
          outlined
          dense
          @keyup.enter="loginAt"
          :rules="[val => !!val || 'El campo es requerido.']">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input
          class="q-mt-md"
          color="primary"
          v-model="password"
          label="Contraseña"
          ref="password"
          name="password"
          type="password"
          dense
          outlined
          @keyup.enter="loginAt"
          :rules="[val => !!val || 'El campo es requerido.']">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions :class="!$q.dark.isActive ? 'bg-blue-grey-1' : 'bg-dark'">
        <q-space/>
        <!-- <q-btn
          label="app android"
          color="secondary"
          icon="cloud_download"
          type="a"
          :href="urlDownload"
          v-if="!this.$q.platform.is.nativeMobile && this.$q.platform.is.platform !== 'win' && this.$q.platform.is.platform !== 'linux'"
        /> -->
        <q-btn
          color="primary"
          type="submit"
          :disable="btnDisable">
          <span v-if="btnDisable">
            <q-spinner-hourglass
              color="blue-1"
              size="20px"
              :disable="btnDisable"
            />
            Cargando...
          </span>
          <span v-if="!btnDisable">
            Iniciar Sesión
          </span>
        </q-btn>
      </q-card-actions>
      <!-- <q-card-actions align="center" class="q-mt-xs">
        <q-img style="width:35%;"  src='klogo.png' class="q-mt-xl"/>
      </q-card-actions> -->
    </q-card>
  </q-form>
</template>
<script>
import { Notify } from 'quasar'
import { mapActions } from 'pinia'
import { authentication } from 'stores/module-authentication';
export default {
  data () {
    return {
      messageLogin: {
        'Request failed with status code 401': 'Credenciales incorrectas',
        'Network Error': 'Error de red',
        "Cannot read properties of undefined (reading 'route')": 'El rol no tiene acceso a los modulos del menu',
        'auth/too-many-requests': 'El acceso a esta cuenta se ha inhabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión'
      },
      /**
         * Email User
         * @type {String}
         */
      username: '',
      /**
         * Password User
         * @type {String}
         */
      password: '',

      btnDisable: false,
      urlDownload: null
    }
  },
  computed: {
    heightWindow () {
      return screen.height
    }
  },
  created () {
    // this.getApks()
  },
  methods: {
    getApks () {
      this.$api.get('apks', {
        params: {
          sortBy: 'id',
          sortOrder: 'desc'
        }
      })
        .then(async ({ data }) => {
          this.apk = data[0]
          this.$api.get('apks/download', {
            params: {
              apk_file: this.apk.url_download
            }
          })
            .then(({ data }) => {
              this.urlDownload = data
            })
            .catch((err) => {
              Notify.create({
                message: err.message,
                icon: 'warning',
                color: 'negative'
              })
            })
        })
    },
    /**
     * Login app
     */
    async loginAt () {
      try {
        this.btnDisable = true
        console.log(this)
        await this.login({ username: this.username, password: this.password })
        console.log('Home')
        this.$router.push({ name: 'Home' })
        this.btnDisable = false
      } catch (error) {
        console.log(error)
        this.btnDisable = false
      }
    },
    ...mapActions(authentication, ['login'])
  }
}
</script>
<style>
  .img {
    width: 40%;
  }
  .body {
    scroll-behavior: hidden;
  }
</style>
