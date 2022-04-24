<template>
  <v-card-text class="mt-n4 pb-4">
    <v-text-field
        disabled
        color="primary"
        label="Mã sinh viên"
        v-model="info.user_id"
    ></v-text-field>

    <v-text-field
        disabled
        color="primary"
        v-model="info.hoVaTen"
        label="Họ và tên"
    ></v-text-field>

    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            :disabled="!isEditing"
            color="primary"
            label="Ngày sinh"
            v-model="dob"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="info.ngaySinh"
          no-title
          scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="saveDob(info.ngaySinh)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>

    <v-text-field
        :disabled="!isEditing"
        color="primary"
        label="Email"
        v-model="info.email"
        :rules="emailRules"
    ></v-text-field>

    <v-text-field
        disabled
        color="primary"
        label="Chức vụ"
        v-model="info.chucVu"
    ></v-text-field>

    <v-item-group class="text-right">

      <v-btn
          v-if="isEditing"
          color="success"
          @click="save"
      >
        Lưu
      </v-btn>

      <v-btn
          v-if="!isEditing"
          color="primary"
          @click="isEditing = !isEditing"
      >Chỉnh sửa
      </v-btn>
    </v-item-group>


    <v-snackbar
        v-model="hasSaved"
        :timeout="2000"
        absolute
        bottom
        left
    >
      Cập nhật thông tin thành công
    </v-snackbar>
  </v-card-text>
</template>

<script>
import moment from "moment";

export default {
  name: "Profile",
  data() {
    return {
      isEditing: false,
      hasSaved: false,
      emailRules: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail chưa đúng định dạng'
      ],
      menu: false,
      dob: '',
      info: {
        user_id: '',
        hoVaTen: '',
        ngaySinh: '',
        email: '',
        chucVu: '',
      },
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$services.ProfileService.query()
          .then(res => {
            this.info.user_id = res.data.id
            this.info.hoVaTen = res.data.name
            this.dob = moment(res.data.birthDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
            this.info.ngaySinh = res.data.birthDate
            this.info.email = res.data.users.email
            this.info.chucVu = res.data.users.role
          })
    },
    saveDob(dob) {
      this.dob = moment(dob, 'YYYY-MM-DD').format('DD/MM/YYYY')
      this.menu= false
      this.$refs.menu.save(dob)
    },
    save() {
      this.isEditing = !this.isEditing
      this.$services.ProfileService.updateProfile({
        birthDate: this.info.ngaySinh,
        email: this.info.email
      })
      .then(() => {
        this.hasSaved = true
      })
    },
  }
}
</script>

<style scoped>

</style>
