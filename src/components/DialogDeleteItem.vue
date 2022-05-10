<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Xác nhận xoá
        </v-card-title>
        <v-card-text class="mt-5 mb-2">
          Hành động không thể hoàn tác!
          Bạn chắc chắn xoá chứ ?
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
              @click="accept"
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
  name: "DialogDeleteItem",
  data() {
    return {
      dialog: false,
      item: ''
    }
  },
  methods: {
    openDialog(item) {
      this.item = item
      this.dialog = true
    },
    accept() {
      this.$emit('accept', this.item)
    },
    closeDialog(){
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
