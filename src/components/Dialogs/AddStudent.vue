<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Thêm sinh viên
        </v-card-title>

        <v-card-text class="mt-8 mb-2">
          <v-row class="justify-center align-center">
            <v-btn color="blue lighten-2"
                   class="ma-2 white--text"
                   @click="option = 'upload'"
            >
              Tải lên một tệp
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            hoặc
            <v-btn color="teal lighten-2"
                   class="ma-2 white--text"
                   @click="option = 'manual'"
            >
              Nhập thủ công
              <v-icon right dark>mdi-pencil</v-icon>
            </v-btn>
          </v-row>
        </v-card-text>

        <v-card-text v-if="option== 'upload'">
          <v-card elevation="0" outlined rounded>
            <v-card-text>
              <v-file-input
                  accept="xlsx"
                  placeholder="Chọn file"
                  @change="onchange"
              >

              </v-file-input>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-card-text v-if="option=='manual'"
                     class="mt-5 mb-2">
          <v-text-field label="Mã sinh viên"
                        v-model="item.userID">
          </v-text-field>
          <v-text-field label="Họ tên"
                        v-model="item.name">
          </v-text-field>

          <v-text-field label="Email"
                        v-model="item.email">
          </v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              outlined
              color="primary"
              @click="cancel"
          >
            Huỷ
          </v-btn>

          <v-btn v-if="option"
                 depressed
                 color="primary"
                 @click="ok"
          >
            Đồng ý
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: "DialogAddStudent",
  data(){
    return {
      dialog: false,
      option: "",
      item: {}
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    cancel(){
      this.dialog= false
      this.option = null
    },
    ok(){
      const formData = new FormData()
      formData.append('file', this.url)
      this.$axios({
        method: "post",
        url: "http://api.lethanhhuyen.nvcd.xyz/api/training/detail-users/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
          .then(() => {
            console.log("thanh cong nha")
            this.$emit("success")
            this.cancel()

          })
      .catch(()=>{
        this.$emit("fail")
        this.cancel()
      })
    },
    onchange(){
      this.url = event.target.files[0]
      console.log("url", this.url)
    }
  }
}
</script>

<style scoped>

</style>
