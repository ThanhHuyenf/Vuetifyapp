<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Chỉnh sửa ảnh đại diện
      </v-card-title>
      <v-card-text>
        <v-file-input label="Upload image"
                      accept="image/png, image/jpeg, image/bmp">

        </v-file-input>
      </v-card-text>


    <vue-croppie
        ref="croppieRef"
        :enableOrientation="true"
        :boundary="{ width: 300, height: 300 }"
        @result="result"
        @update="update">
    </vue-croppie>

    <img style="margin-top:20px" v-bind:src="cropped">
    <div style="margin-top:20px">
      <button @click="crop()">Crop</button>
    </div>
    <!--    <v-card-->
    <!--        @drop.prevent="dragover = false"-->
    <!--        @dragover.prevent="dragover = true"-->
    <!--        @dragenter.prevent="dragover = true"-->
    <!--        @dragleave.prevent="dragover = false"-->
    <!--        :class="{ 'grey lighten-2': dragover }"-->
    <!--    >-->
    <!--      <v-card-text>-->
    <!--        <v-row class="d-flex flex-column" dense align="center" justify="center">-->
    <!--          <v-icon :class="[dragover ? 'mt-2, mb-6' : 'mt-5']" size="60">-->
    <!--            mdi-cloud-upload-->
    <!--          </v-icon>-->
    <!--          <p>-->
    <!--            Drop your file(s) here, or click to select them.-->
    <!--          </p>-->
    <!--        </v-row>-->
    <!--      </v-card-text>-->
    <!--      <v-card-actions>-->
    <!--        <v-spacer></v-spacer>-->

    <!--        <v-btn @click="closeDialog" icon>-->
    <!--          <v-icon id="close-button">mdi-close</v-icon>-->
    <!--        </v-btn>-->

    <!--        <v-btn icon>-->
    <!--          <v-icon id="upload-button">mdi-upload</v-icon>-->
    <!--        </v-btn>-->
    <!--      </v-card-actions>-->
    <!--    </v-card>-->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChangeImgProfile",
  data() {
    return {
      // closeDialog: false,
      dialog: true,
      dragover: null,

      cropped: null,
      images: [
        'http://i.imgur.com/fHNtPXX.jpg',
        'http://i.imgur.com/ecMUngU.jpg',
        'http://i.imgur.com/7oO6zrh.jpg',
        'http://i.imgur.com/miVkBH2.jpg'
      ]

    }
  },
  mounted () {
    // Set image để sử dụng cho Vue-croppie
    this.$refs.croppieRef.bind({
      url: 'http://i.imgur.com/Fq2DMeH.jpg'
    })
  },
  methods: {
    closeDialog() {
      this.dialog = false
    },

    bind() {
      // Chọn 1 hình trong các hình trong thư viện
      let url = this.images[Math.floor(Math.random() * 4)]
      this.$refs.croppieRef.bind({
        url: url
      })
    },

    crop() {
      // để sẵn format của hình là kiểu jpeg
      let options = {
        format: 'jpeg',
        circle: true
      }
      this.$refs.croppieRef.result(options, (output) => {
        this.cropped = output
      })
    },

    result(output) {
      this.cropped = output
    },

    update(val) {
      console.log(val)
    },
  }

}
</script>

<style scoped>
button{
  padding: 4px 6px;
  background-color: grey;
}
button+ button{
  margin-left: 5px;
}
</style>
