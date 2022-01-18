<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <v-subheader class="mb-n2">Tong so: {{items.length}}</v-subheader>
          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) +1}}
            </template>



            <template v-slot:item.tacVu="{item}">
              <v-menu
                  top
                  offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      v-bind="attrs"
                      v-on="on"
                  >
                    mdi-dots-vertical
                  </v-icon>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title @click="edit(item)">Chỉnh sửa</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <router-link :to="{
                                 name: 'DetailFaculty',
                                 params: {
                                   tenKhoa: item.khoa,
                                 }
              }">
                      <v-list-item-title>Thay đổi mật khẩu</v-list-item-title>
                    </router-link>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title @click="deleteItem(item)">Xoá</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>

          </v-data-table>
        </v-item-group>
      </div>
    </Header>
    <DialogEditTeacher ref="dialogEditTeacher"></DialogEditTeacher>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogEditTeacher from "@/components/DialogEditTeacher";
export default {
  name: "ListTeachersDepartment",
  components: {DialogEditTeacher, Header},
  created() {
    this.getData()
  },
  data(){
    return{
      title: "Danh sách cố vấn học tập",
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '7%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'hoTen',
          width: '25%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
          width: '20%'
        },
        {
          text: 'Số điện thoai',
          align: 'start',
          sortable: false,
          value: 'soDienThoai',
          width: '20%'
        },
        {
          text: 'Lớp đang QL',
          align: 'start',
          sortable: false,
          value: 'listClasses',
          width: '20%'
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '15%'
        }
      ],
      items: [],
    }
  },
  computed: {
    filteredItems(){
      return this.items
    }
  },
  methods: {
    getData(){
      this.$axios.get("http://localhost:3000/listTeachers")
      .then(res => {
        this.items = res.data
      })
    },
    edit(item){
      this.$refs.dialogEditTeacher.openDialog(item)
    },
    deleteItem(){
      return
    }
  }
}
</script>

<style scoped>

</style>
