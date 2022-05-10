<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        color="grey lighten-3"
        :value="drawer1"
    >
      <v-list dense>
        <v-row justify="space-around" class="mt-10">
          <v-avatar height="150px" width="150px">
            <v-img :src="imageUrls"
                   class="mx-auto rounded-circle">
            </v-img>
          </v-avatar>

          <v-list-item>
            <v-list-item-content class="text-center">
              <v-list-item-title class="text-uppercase">{{ tag.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ tag.id }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>

        <v-list-item-group
            v-model="selectedItem"
            color="primary"
            class="mt-10"
            mandatory
        >
          <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Đăng xuất</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      selectedItem: 0,
      menuItems: [],
      drawer: true,
      imageUrls: '',
      studentItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Tự đánh giá KQRL', icon: 'mdi-pen', to: "/grading"},
        {text: 'Xem điểm rèn luyện', icon: 'mdi-heart', to: "/resultsHistory"},
      ],
      monitorItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Tự đánh giá KQRL', icon: 'mdi-pen', to: "/grading/"},
        {text: 'Xem điểm rèn luyện', icon: 'mdi-heart', to: "/resultsHistory"},
        {text: 'Đánh giá thành viên', icon: 'mdi-account-group', to: "/listMembersMonitor"},
      ],
      teacherItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Danh sách sinh viên', icon: 'mdi-account-group', to: "/listMembersTeacher"},
        // {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', to: "/listClassesTeacher"},
        // {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', to: "/listClassesReviewDepartment"},
      ],
      departmentItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Duyệt điểm', icon: 'mdi-check-bold', to: "/listClassesReviewDepartment"},
        {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', to: "/listClassesDepartment"},
        {text: 'Danh sách cố vấn học tập', icon: 'mdi-account-multiple', to: "/listTeachersDepartment"},
      ],
      adminItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        // {text: 'Phiếu xét điểm rèn luyện', icon: 'mdi-file', to: "/pointTraining"},
        {text: 'Quản lý thời gian', icon: 'mdi-clock', to: "/manageTime"},
        {text: 'Quản lý khung điểm', icon: 'mdi-application-edit', to: "/pointFrame"},
        {text: 'Báo cáo, thống kê', icon: 'mdi-file-document', to: "/statistic"},
        {text: 'Danh sách khoa', icon: 'mdi-format-list-bulleted', to: "/listDepartments"},
        {text: 'Danh sách cố vấn học tập', icon: 'mdi-account-multiple', to: "/listTeacherAdmin"},
        {text: 'Danh sách sinh viên', icon: 'mdi-account-group', to: "/listMembersAdmin"},

      ]
    }
  },
  created() {
    this.getTag()
    this.getData()
  },
  computed: {
    tag() {
      return this.$store.state.tag
    },
    drawer1() {
      return this.$store.state.drawer
    }
  },
  methods: {
    ...mapActions(['getTag']),
    getData() {
      if (this.tag.role == "Student") {
        this.menuItems = this.studentItems
        localStorage.setItem("userID", this.tag.userID)
      }
      if (this.tag.role == "Monitor") {
        this.menuItems = this.monitorItems
        localStorage.setItem("userID", this.tag.userID)
      }
      if (this.tag.role == "Teacher") this.menuItems = this.teacherItems
      if (this.tag.role == "Department") this.menuItems = this.departmentItems
      if (this.tag.role == "Admin") this.menuItems = this.adminItems

      this.$services.ProfileService.query()
          .then(res => {
            const fileId = res.body?.imageUrls?.split('/', 8)[7]
            this.$axios({
              method: 'get',
              url: `http://api.lethanhhuyen.nvcd.xyz/api/training/common/avatars/${fileId}`,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              responseType: 'arraybuffer',
            })
                .then(res1 => {
                  const image = ('data:image/jpeg;base64,' + btoa(
                      new Uint8Array(res1.data).reduce((data, byte) => data +
                          String.fromCharCode(byte), '')
                  ));
                  this.imageUrls = image
                })
          })
    },
    logout() {
      localStorage.removeItem("token")
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>

