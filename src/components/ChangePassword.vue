<template>
  <v-card-text class="mt-4">
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
          label="Mật khẩu cũ"
          v-model="oldPassword"
          :type="!e1 ? 'password' : 'text'"
          :append-icon="!e1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          @click:append="() => (e1 = !e1)"
          :rules="oldPasswordRules"
          required
      ></v-text-field>
      <v-text-field
          color="primary"
          v-model="newPassword"
          label="Mật khẩu mới"
          min="8"
          :type="!e2 ? 'password' : 'text'"
          :append-icon="!e2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          @click:append="() => (e2 = !e2)"
          :rules="passwordRules"
          required
      ></v-text-field>

      <v-text-field
          color="primary"
          label="Xác nhận lại mật khẩu"
          v-model="passwordConfirmation"
          :type="!e3 ? 'password' : 'text'"
          :append-icon="!e3 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          @click:append="() => (e3 = !e3)"
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
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: '',
      e1: false,
      e2: false,
      e3: false,
      oldPasswordRules: [
        v => !!v || 'Không được để trống trường này',
      ],
      passwordRules: [
        v => !!v || 'Không được để trống trường này',
        v => v.length > 7 || 'Mật khẩu cần có đọ dài tối thiểu là 8',
      ],
      passwordCofirmationRules: [
        v => !!v || 'Không được để trống trường này'
      ],
      noti: false,
      loading: false,
      message: ""
    }
  },
  methods: {
    //Khi mật khẩu ko trùng khớp thì chỉ cần điền lại mk mới, nên hàm clear ko xoá mk cũ
    // Khi submit mà mk cũ sai thì phải thêm phần xoá mk cũ
    clear() {
      this.$refs.form.resetValidation()
      this.newPassword = ''
      this.passwordConfirmation = ''
    },
    changePassword() {
      if (this.newPassword != this.passwordConfirmation) {
        this.noti = true
        this.message = "Mật khẩu không trùng khớp. Vui lòng nhập lại!"
        this.clear()
      } else if(this.oldPassword == '' || this.newPassword == '' || this.passwordConfirmation == ''){
        this.noti = true
        this.message = "Vui lòng điền đầy đủ thông tin!"
      } else {
        this.loading = true
        this.$axios.post('http://api.lethanhhuyen.nvcd.xyz/api/users/change-password', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
            .then(() => {
              this.loading = false
              location.reload()
            })
            .catch(() => {
              this.noti = true
              this.loading = false
              this.message = 'Mật khẩu không chính xác. Vui lòng nhập lại!'
              this.oldPassword = ''
              this.clear()
            })
      }
    }
  }
}
</script>

<style scoped>

</style>
