<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Chỉnh sửa ảnh đại diện
      </v-card-title>
      <v-card-text>
        <v-file-input label="Upload ảnh"
                      accept="image/png, image/jpeg, image/bmp"
                      @change="onFileUpload">

        </v-file-input>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-item-group class="text-right">
          <v-btn class="reset-btn mr-2"
                 depressed
                 outlined
                 color="primary"
                 @click="closeDialog">
            Huỷ
          </v-btn>
          <v-btn
              color="success"
              @click="changeImg"
              :loading="loading"
              :disabled="!url"
          >
            Lưu
          </v-btn>
        </v-item-group>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChangeImgProfile",
  data() {
    return {
      dialog: false,
      url: null,
      name: '',
      loading: false
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.image = null
      this.url = null
      this.dialog = false
    },
    onFileUpload(){
      this.url = event.target.files[0]
      console.log("url", this.url)
    },
    changeImg(){
      const formData = new FormData()
      formData.append('file', this.url)
      // this.$services.ImgService.changeAvatar(formData)
      this.$axios({
        method: "post",
        url: "http://api.lethanhhuyen.nvcd.xyz/api/training/common/avatar",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        console.log("thanh cong")
      })
    }
  },

}
</script>

<style scoped>
.hidden {
  display: none !important;
}
</style>
