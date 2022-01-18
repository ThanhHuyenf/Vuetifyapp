<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        color="grey lighten-3"
    >
        <v-list dense>
          <v-row justify="space-around" class="mt-10">
            <v-avatar height="150px" width="150px">
              <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
              >
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
          <v-list-item  @click="logout()">
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
      studentItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Chấm điểm rèn luyện', icon: 'mdi-pen', to: "/"},
        {text: 'Xem điểm rèn luyện', icon: 'mdi-heart', to: "/resultsHistory"},
      ],
      monitorItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Chấm điểm rèn luyện', icon: 'mdi-pen', to: "/"},
        {text: 'Xem điểm rèn luyện', icon: 'mdi-heart', to: "/resultsHistory"},
        {text: 'Danh sách sinh viên', icon: 'mdi-account-group', to: "/listMembersMonitor"},
      ],
      teacherItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Danh sách sinh viên', icon: 'mdi-account-group', to: "/listMembersTeacher"},
        {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', to: "/listClassesTeacher"},
      ],
      departmentItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Sơ yếu lý lịch', icon: 'mdi-account', to: "/profile"},
        {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', to: "/listClassesDepartment"},
        {text: 'Danh sách giảng viên', icon: 'mdi-account-multiple', to: "/listTeachersDepartment"},
      ],
      adminItems: [
        {text: 'Trang chủ', icon: 'mdi-home', to: "/homepage"},
        {text: 'Phiếu xét điểm rèn luyện', icon: 'mdi-file', to: "/"},
        {text: 'Danh sách khoa', icon: 'mdi-format-list-bulleted', to: "/listFaculties"},
        {text: 'Quản lý thời gian', icon: 'mdi-clock', to: "/manageTime"},
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
    }
  },
  methods: {
    ...mapActions(['getTag']),
    getData() {
      if (this.tag.role == "Student") this.menuItems = this.studentItems
      if (this.tag.role == "Monitor") this.menuItems = this.monitorItems
      if (this.tag.role == "Teacher") this.menuItems = this.teacherItems
      if (this.tag.role == "Department") this.menuItems = this.departmentItems
      if (this.tag.role == "Admin") this.menuItems = this.adminItems
    },
    logout(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>

