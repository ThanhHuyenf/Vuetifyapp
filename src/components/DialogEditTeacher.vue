<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Chỉnh sửa thông tin cố vấn học tập
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-text-field label="Họ tên"
                        v-model="item.hoTen">
          </v-text-field>

          <v-text-field label="Email"
                        v-model="item.email">
          </v-text-field>

          <v-text-field label="Số điện thoại"
                        v-model="item.soDienThoai">
          </v-text-field>

          <v-text-field label="Danh sách lớp quản lý"
                        v-model="item.listClasses">
          </v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Huỷ
          </v-btn>
          <v-btn
              text
              depressed
              color="primary"
              @click="dialog = false"
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
  name: "DialogEditTeacher",
  data() {
    return {
      dialog: false,
      item: {}
    }
  },
  methods: {
    openDialog(item) {
      this.dialog = true
      this.item = item
    }
  }
}
</script>

<style scoped>

</style>
