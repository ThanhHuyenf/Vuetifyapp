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
              <v-card-text>
                <v-alert v-model="noti"
                         dense
                         outlined
                         type="error"
                >
                  {{ message }}
                </v-alert>

                <v-form ref="form">
                  <v-text-field
                      color="primary"
                      v-model="newPassword"
                      label="Mật khẩu mới"
                      min="8"
                      :type="!e1 ? 'password' : 'text'"
                      :append-icon="!e1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append="() => (e1 = !e1)"
                      :rules="passwordRules"
                      required
                  ></v-text-field>

                  <v-text-field
                      color="primary"
                      label="Xác nhận lại mật khẩu"
                      v-model="passwordConfirmation"
                      :type="!e2 ? 'password' : 'text'"
                      :append-icon="!e2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append="() => (e2 = !e2)"
                      required
                      :rules="passwordCofirmationRules"
                  ></v-text-field>

                  <v-item-group class="text-right">
                    <v-btn class="reset-btn mr-2"
                           depressed
                           outlined
                           color="primary"
                           @click="clear">
                      Reset
                    </v-btn>
                    <v-btn
                        color="success"
                        @click="changePassword"
                        :loading="loading"
                    >
                      Lưu
                    </v-btn>
                  </v-item-group>
                </v-form>
              </v-card-text>
            </v-card>
            <v-card v-else>
              <v-card v-if="noerror" class="pa-4">
                <v-card-text>
                  Thay đổi mật khẩu thành công!
                </v-card-text>
                <v-btn class="blue darken-2 white--text"
                       width="100%"
                       @click="backToLogin">
                  Đăng nhập
                </v-btn>
              </v-card>

              <v-card v-else class="pa-4">
                <v-card-text>
                  Lỗi! Vui lòng thử lại sau 10 phút! Chin cám ưnnn
                </v-card-text>
                <v-btn class="blue darken-2 white--text"
                       width="100%"
                       @click="backToLogin">
                  Quay về trang đăng nhập
                </v-btn>
              </v-card>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      newPassword: '',
      passwordConfirmation: '',
      e1: false,
      e2: false,
      passwordRules: [
        v => !!v || 'Không được để trống trường này',
        v => v.length > 7 || 'Mật khẩu cần có đọ dài tối thiểu là 8',
      ],
      passwordCofirmationRules: [
        v => !!v || 'Không được để trống trường này'
      ],
      noti: false,
      loading: false,
      message: "",
      success: false,
      noerror: true
    }
  },
  methods: {
    clear() {
      this.$refs.form.resetValidation()
      this.newPassword = ''
      this.passwordConfirmation = ''
    },
    changePassword() {
      if (this.newPassword != this.passwordConfirmation) {
        this.noti = true
        this.message = 'Mật khẩu không trùng khớp. Vui lòng nhập lại!'
      } else if (this.newPassword == '' || this.passwordConfirmation == '') {
        this.noti = true
        this.message = 'Vui lòng điền đầy đủ thông tin!'
      } else {
        this.loading = true

        this.$services.LoginService.resetPassword({
          token: this.$route.params.token,
          newPassword: this.newPassword
        })
            .then(() => {
              this.loading = false
              this.success = true
              this.noerror = true
            })
            .catch(() => {
              this.loading = false
              this.success = true
              this.noerror = false
            })

      }
    },
    backToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.loginOverlay {
  margin-top: 10%;
}
</style>
