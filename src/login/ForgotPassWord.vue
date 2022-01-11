<template>
  <v-app>
    <main>
      <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
          <v-flex xs12 sm4 elevation-6>
            <v-toolbar class="align-center text-center blue darken-2">
              <v-toolbar-title class="white--text"><h4>Khôi phục mật khẩu</h4></v-toolbar-title>
            </v-toolbar>

            <v-card v-if="!success">
              <v-card-text class="pt-4">
                <div>
                  <v-alert
                      v-model="emtyEmail"
                      outlined
                      dense
                      type="error"
                  >
                    {{ message }}
                  </v-alert>

                  <v-form v-model="valid" ref="form" @submit.prevent="submit">
                    <v-text-field
                        label="Nhập email của bạn"
                        v-model="email"
                        :rules="emailRules"
                        required
                        append-icon="mdi-email-outline"
                        class="mt-5 mb-5"
                    ></v-text-field>
                    <v-layout justify-space-between>
                      <v-btn class="blue darken-2 white--text"
                             :loading="loading"
                             width="100%"
                             type="submit">
                        Gửi
                      </v-btn>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>

            <v-card v-else>
              <v-card-text class="ma-auto text-body-1">
                Vui lòng kiểm tra email và làm theo hướng dẫn!
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "ForgotPassWord",
  data() {
    return {
      valid: false,
      success: false,
      loading: false,
      emtyEmail: false,
      message: '',
      email: '',
      emailRules: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail chưa đúng định dạng'
      ]
    }
  },
  methods: {
    submit() {
      if (this.email.trim() == '') {
        this.message = 'Vui lòng nhập email'
        this.emtyEmail = true
      } else {
        this.loading = true
        this.$services.LoginService.forgotPassword({email: this.email})
            .then(() => {
              this.success = true
              this.loading = false
            })
            .catch(() => {
              this.message = "Email không chính xác! Vui lòng nhập lại."
              this.emtyEmail = true

              this.$refs.form.resetValidation()
              this.email = ''
              this.loading = false
            })
      }
    }
  }
}
</script>

<style scoped>
.loginOverlay {
  margin-top: 10%;
}
</style>
