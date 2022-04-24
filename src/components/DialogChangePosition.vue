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
                        v-model="item.name">
          </v-text-field>

          <v-switch
              v-model="switchRole"
              inset
              label="Cán bộ lớp"
          ></v-switch>

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
      item: {},
      switchRole: true
    }
  },
  methods: {
    openDialog(item) {
      this.dialog = true
      this.item = {...item}
      this.item.role == "Student" ? this.switchRole = false : this.switchRole = true
    },
    closeDialog() {
      this.dialog = false
    },
    changePosition() {
      this.loading = true
      this.$services.TeacherService.assignMonitor({id: this.item.userID})
      .then(res => {
        this.loading = false
        this.dialog = false
        this.$emit("done-change")
      })
    }
  }
}
</script>

<style scoped>

</style>
