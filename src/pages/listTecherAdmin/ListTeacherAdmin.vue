<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="pa-4">
          <div class="text-right d-flex justify-space-between">
            <v-subheader class="mb-n2">Tổng số: {{ items.length }}</v-subheader>

            <v-btn outlined
                   color="primary"
                   @click="addNew">
              Thêm
            </v-btn>
          </div>

          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
            </template>


            <template v-slot:item.tacVu="{item}">
              <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>

              <v-icon
                  small
                  class="mr-2"
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </v-item-group>
        <v-snackbar v-model="snackbar"
                    :color="color"
                    :timeout="3000"
                    absolute
                    top
                    centered>
          {{ message }}
        </v-snackbar>
      </div>
    </Header>
    <!--    <DialogEditTeacher ref="dialogEditTeacher"></DialogEditTeacher>-->
    <DialogAddTeacher ref="dialogAddTeacher" @success = "updating" @fail = "cantUpdate"></DialogAddTeacher>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogAddTeacher from "@/components/Dialogs/AddTeacher";

export default {
  name: "ListTeacherAdmin",
  components: {Header, DialogAddTeacher},
  data() {
    return {
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
          value: 'teacherName',
          width: '20%',
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
          width: '15%'
        },
        {
          text: 'Số điện thoại',
          align: 'start',
          sortable: false,
          value: 'teacherNumber',
          width: '15%'
        },
        {
          text: 'Khoa',
          align: 'start',
          sortable: false,
          value: 'teacherDepartmentName',
          width: '20%'
        },
        {
          text: 'Lớp đang QL',
          align: 'start',
          sortable: false,
          value: 'class',
          width: '15%'
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
      snackbar: false,
      message: '',
      color: 'blue'
    }
  },
  computed: {
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$services.AdminService.getListTeachers()
          .then(res => {
            this.items = res.body
            for (let i = 0; i < this.items.length; i++) {
              this.items[i].class = res.body[i].class[0].className
            }
          })
    },
    addNew() {
      this.$refs.dialogAddTeacher.openDialog()
    },
    editItem(item) {
      return item
    },
    deleteItem(item) {
      return item
    },
    updating(){
      this.getData()
      this.snackbar = true
      this.message= 'Upload file thành công'
    },
    cantUpdate() {
      this.snackbar = true
      this.message= 'Upload file không thành công thành công. Vui lòng kiểm tra lại!'
      this.color = 'red'
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
