<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-card
            elevation="2"
            class="mx-auto my-6"
            max-width="700"
        >
          <v-tabs >
            <v-tab @click="isProfile= true">Thông tin cá nhân</v-tab>
            <v-tab @click="isProfile= false">Thay đổi mật khẩu</v-tab>
          </v-tabs>

          <v-divider></v-divider>

          <!--          Giao dien cua trang ca nhan-->
          <v-item-group v-if="isProfile" class="mt-4">
            <v-item>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                     height="180px"
                     width="180px"
                     class="mx-auto rounded-circle">
              </v-img>
            </v-item>
            <v-item>
              <v-card-text class="text-center
               text-decoration-underline
               row-pointer ">Thay đổi ảnh đại diện
              </v-card-text>
            </v-item>
          </v-item-group>
          <v-card-text v-if="isProfile" class="mt-n4 pb-4">
            <v-text-field
                disabled
                color="primary"
                label="Mã sinh viên"
                v-model="maSinhvien"
            ></v-text-field>

            <v-text-field
                :disabled="!isEditing"
                color="primary"
                v-model="hoVaTen"
                label="Họ và tên"
            ></v-text-field>

            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="ngaySinh"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    :disabled="!isEditing"
                    color="primary"
                    label="Ngày sinh"
                    v-model="ngaySinh"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="ngaySinh"
                  no-title
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(ngaySinh)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>

            <v-text-field
                :disabled="!isEditing"
                color="primary"
                label="Email"
                v-model="email"
            ></v-text-field>

            <v-text-field
                disabled
                color="primary"
                label="Chức vụ"
                v-model="chucVu"
            ></v-text-field>

            <v-item-group class="text-right">

              <v-btn
                  v-if="isEditing"
                  color="success"
                  @click="save"
              >
                Lưu
              </v-btn>

              <v-btn
                  v-if="!isEditing"
                  color="primary"
                  @click="isEditing = !isEditing"
              >Chỉnh sửa
              </v-btn>
            </v-item-group>


            <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
            >
              Your profile has been updated
            </v-snackbar>


          </v-card-text>

          <!--          Giao dien thay doi mat khau-->
          <v-form ref="form">
            <v-card-text v-if="!isProfile" class="mt-4">
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
                  v-model="password"
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
                >
                  Lưu
                </v-btn>
              </v-item-group>


              <v-snackbar
                  v-model="hasSaved"
                  :timeout="2000"
                  absolute
                  bottom
                  left
              >
                Your profile has been updated
              </v-snackbar>


            </v-card-text>

          </v-form>

        </v-card>
      </div>
    </Header>
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Profile",
  components: {Header},
  data() {
    return {
      title: "Thông tin cá nhân",
      isEditing: false,
      hasSaved: false,
      maSinhvien: '',
      hoVaTen: '',
      ngaySinh: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      email: '',
      chucVu: '',
      menu: false,
      isProfile: true,
      oldPassword: '',
      password: '',
      passwordConfirmation: '',
      e1: false,
      e2: false,
      e3: false,
      oldPasswordRules: [
        v => !!v || 'Không được để trống trường này',
      ],
      passwordRules: [
        v => !!v || 'Không được để trống trường này',
        v => v.length > 8 || 'Mật khẩu cần có đọ dài tối thiểu là 8',
      ],
      passwordCofirmationRules: [
        v => !!v || 'Không được để trống trường này'
      ]
    }
  },
  methods: {
    save() {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },
    clear() {
      this.$refs.form.resetValidation()
      this.oldPassword = ''
      this.password = ''
      this.passwordConfirmation = ''
    },
    changePassword() {
      if (this.password != this.passwordConfirmation) {
        //  Thong bao sai
      } else {
        //  Gui cho backend check mk cu
      }
    }
  }

}
</script>

<style scoped>
.row-pointer:hover {
  cursor: pointer;
  color: dodgerblue;
}

.reset-btn{
  background: white;
}
</style>
