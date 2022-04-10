<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Chỉnh sửa ảnh đại diện
      </v-card-title>
      <v-card-text>
        <v-file-input label="Upload image"
                      accept="image/png, image/jpeg, image/bmp"
                      @change="Preview_image"
                      v-model="image">

        </v-file-input>
        <div :class="!image ? hidden : ''">
          <v-img :src="url" ></v-img>
        </div>
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
              :disabled="!image"
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
      dialog: true,
      image: null,
      url: null,
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
    Preview_image() {
      this.url = URL.createObjectURL(this.image)
    },
    changeImg(){
      return
    }
  },

}
</script>

<style scoped>
.hidden {
  display: none !important;
}
</style>
