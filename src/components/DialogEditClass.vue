<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Chỉnh sửa thông tin lớp
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
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
  name: "DialogEditClass",
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
