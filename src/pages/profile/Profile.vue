<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-card
            elevation="2"
            class="mx-auto my-6"
            max-width="700"
        >
          <v-tabs>
            <v-tab @click="isProfile = true">Thông tin cá nhân</v-tab>
            <v-tab @click="isProfile = false">Thay đổi mật khẩu</v-tab>
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
               row-pointer "
              @click="changeImg()">Thay đổi ảnh đại diện
              </v-card-text>
            </v-item>
          </v-item-group>
          <div v-if="isProfile">
            <Info :info="info"></Info>
          </div>

          <!--          Giao dien thay doi mat khau-->
          <v-form ref="form" v-if="!isProfile">
            <ChangePassword @update-password="updatePassword"></ChangePassword>
          </v-form>
        </v-card>
      </div>
    </Header>

    <FormChangeImg ref="dialogChangeImg"></FormChangeImg>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Info from "@/components/Info"
import ChangePassword from "@/components/ChangePassword";
import FormChangeImg from "@/components/FormChangeImg";

export default {
  name: "Profile",
  components: {FormChangeImg, ChangePassword, Header, Info},
  data() {
    return {
      title: "Thông tin cá nhân",
      info: {
        user_id: '',
        hoVaTen: '',
        ngaySinh: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        email: '',
        chucVu: '',
      },
      isProfile: true,

    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('http://localhost:3001/api/users')
          .then(res => {
            this.info.user_id = res.data.user_id
            this.info.hoVaTen = res.data.name
            this.info.email = res.data.email
            this.info.chucVu = res.data.role
          })
    },
    changeImg(){
      this.$refs.dialogChangeImg.openDialog()
    },
    updatePassword(e) {
      this.$axios.post('http://localhost:3001/api/change-password', {
        oldPassword: e[0],
        newPassword: e[1]
      })
          .then(res => {
            if (res.status == 200) {
              // this.loadingChangePassword = false
              location.reload();
            }
            if (res.status == 401) {
              // this.equal = false
              // this.messagePassword = "Mat khau khong chinh xac"
            }
          })
    }

  }

}
</script>

<style scoped>
.row-pointer:hover {
  cursor: pointer;
  color: dodgerblue;
}

</style>
