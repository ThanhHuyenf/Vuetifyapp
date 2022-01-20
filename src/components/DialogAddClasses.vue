<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Thêm lớp mới
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
                  accept="image/*"
                  placeholder="Chọn file"
              ></v-file-input>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-card-text v-if="option=='manual'"
            class="mt-5 mb-2">
          <v-text-field label="Khoá"
                        v-model="item.khoa">
          </v-text-field>

          <v-text-field label="Lớp"
                        v-model="item.lop">
          </v-text-field>

          <v-text-field label="Sĩ số"
                        v-model="item.siSo">
          </v-text-field>

          <v-text-field label="Cố vấn học tập"
                        v-model="item.coVan">
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
  name: "DialogAddClasses",
  data() {
    return {
      dialog: false,
      option: "",
      item: {}
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    // choice(){
    //   this.option === "" ? true : false
    // }
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

    }
  }
}
</script>

<style scoped>
a {
  color: black !important;
  font-size: 16px;
  font-weight: 500 !important;
  text-decoration: underline !important;
}
.v-application .rounded{
  border: 1px dashed lightskyblue;
}
</style>
