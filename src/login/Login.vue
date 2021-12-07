<template>
  <v-app>
    <main>
      <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
          <v-flex xs12 sm4 elevation-6>
            <v-toolbar class="align-center text-center blue darken-2">
              <v-toolbar-title class="white--text"><h4>Đăng nhập</h4></v-toolbar-title>
            </v-toolbar>

            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <v-form v-model="valid" ref="form">

                    <v-text-field
                        label="Tên tài khoản"
                        v-model="email"
                        required
                        append-icon="mdi-account-outline"
                    ></v-text-field>
                    <v-text-field
                        label="Mật khẩu"
                        v-model="password"
                        min="8"
                        :append-icon="!e1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                        @click:append="() => (e1 = !e1)"
                        :type="!e1 ? 'password' : 'text'"
                        :rules="passwordRules"
                        required
                    ></v-text-field>
                    <v-layout justify-space-between>
                      <v-btn @click="submit"
                             class="blue darken-2 white--text"
                             :loading="loading">Đăng nhập</v-btn>
                      <a href="">Forgot Password</a>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>

<script>
export default {
  name: "Login",
  data () {
    return {
      valid: false,
      e1: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
      ],
      email: '',
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading= true
      if (this.$refs.form.validate()) {
        this.$axios.post('http://localhost:3001/api/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if(res.status== 200){
            localStorage.setItem("token", res.data.token)
            this.$router.push('/profile')
            this.loading=false
          }else {
          }
        })
      }
    }
  },
}
</script>

<style scoped>
.loginOverlay {
  margin-top: 10%;
}

</style>
