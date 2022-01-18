<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Thay đổi chức vụ
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-text-field label="Họ tên"
                        disabled
                        v-model="item.hoTen">
          </v-text-field>

          <v-select
              :items="items"
              label="Chức vụ"
              v-model="position"
          ></v-select>

        </v-card-text>
        <v-item class="mt-5">

        </v-item>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              outlined
              @click="closeDialog"
          >
            Huỷ
          </v-btn>
          <v-btn
              :loading="loading"
              depressed
              color="primary"
              @click="changePosition"
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
  name: "DialogChangePosition",
  data() {
    return {
      dialog: false,
      loading: false,
      position: null,
      item: {},
      items: ['Sinh viên', 'Cán bộ lớp']
    }
  },
  methods: {
    openDialog(item) {
      this.dialog = true
      this.item = item
    },
    closeDialog() {
      this.position = ''
      this.dialog = false
    },
    changePosition() {
      this.loading = true
    }
  }
}
</script>

<style scoped>

</style>
