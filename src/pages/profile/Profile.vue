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
              <v-img src="https://i.imgur.com/KAi3pm9.jpg"
                     height="180px"
                     width="180px"
                     class="mx-auto rounded-circle">
              </v-img>
            </v-item>
            <v-item>
              <v-card-text class="text-center text-decoration-underline row-pointer "
                           @click="changeAvatar()">Thay đổi ảnh đại diện
              </v-card-text>
            </v-item>
          </v-item-group>
          <div v-if="isProfile">
            <Info></Info>
          </div>

          <!--          Giao dien thay doi mat khau-->
          <v-form ref="form" v-if="!isProfile">
            <ChangePassword @successful="changePasswordSuccess"></ChangePassword>
          </v-form>

        </v-card>
      </div>
    </Header>
    <v-snackbar v-model="notiSuccess"
                color="blue"
                :timeout="3000"
                absolute
                top
                centered>
      {{ message }}
    </v-snackbar>
    <ChangeImgProfile ref="changeImgProfile"
                      @done-edit="doneChangeImg"></ChangeImgProfile>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Info from "@/components/Info"
import ChangePassword from "@/components/ChangePassword";
import ChangeImgProfile from "@/components/ChangeImgProfile";
// import ChangeImgProfile from "@/components/ChangeImgProfile";

export default {
  name: "Profile",
  components: {ChangeImgProfile, ChangePassword, Header, Info},
  data() {
    return {
      title: "Thông tin cá nhân",
      isProfile: true,
      notiSuccess: false,
      message: '',
      imageUrls: ''
    }
  },
  created() {
    this.fetchAvatar()
  },
  methods: {
    fetchAvatar() {
      this.$services.ProfileService.query()
          .then(res => {
            const fileId = res.body.imageUrls.split('/',8)[7]
            this.$axios({
              method: 'get',
              url: `http://api.lethanhhuyen.nvcd.xyz/api/training/common/avatars/${fileId}`,
              headers: {'Content-Type': 'application/x-www-form-urlencoded' },
              responseType: 'arraybuffer',
            })
            .then(res1 => {
              const image = ('data:image/jpeg;base64,' + btoa(
                  new Uint8Array(res1.data).reduce((data, byte) => data +
                      String.fromCharCode(byte), '')
              ));
              this.imageUrls = image
            })
          })

    },
    changeAvatar() {
      this.$refs.changeImgProfile.openDialog()
    },
    changePasswordSuccess() {
      this.notiSuccess = true
      this.message = 'Thay đổi mật khẩu thành công'
      setInterval(() => {
        location.reload()
      }, 3000)
    },
    doneChangeImg() {
      this.fetchAvatar()
      this.message = 'Thay đổi ảnh đại diện thành công'
      this.notiSuccess = true

      setTimeout(() => {
        location.reload()
      }, 3000)
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
