<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Chỉnh sửa thông tin khoa
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-text-field label="Mã khoa"
                        v-model="item.departmentId">
          </v-text-field>

          <v-text-field label="Tên khoa"
                        v-model="item.departmentName">
          </v-text-field>

          <v-text-field label="Mô tả"
                        v-model="item.information">
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

          <v-btn depressed
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
  name: "DialogEditDepartment",
  data() {
    return {
      dialog: false,
      item: {}
    }
  },
  methods: {
    openDialog(item) {
      this.item = {...item}
      this.dialog = true
    },
    cancel() {
      this.dialog = false
      this.option = null
    },
    ok() {

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

.v-application .rounded {
  border: 1px dashed lightskyblue;
}
</style>
