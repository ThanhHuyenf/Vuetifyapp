<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div class="text-right">
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
              fixed-header
              class="elevation-1 rounded-0 mt-1"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
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
                    <v-list-item-title  class="actions" @click="edit(item)">Chỉnh sửa</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <router-link :to="{
                                 name: 'DetailDepartment',
                                 params: {
                                   tenKhoa: item.khoa,
                                 }
              }">
                      <v-list-item-title>Xem chi tiết</v-list-item-title>
                    </router-link>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title class="actions" @click="deleteItem()">Xoá</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-item-group>
      </div>
    </Header>

    <DialogAddDepartment ref="dialogAddDepartment"></DialogAddDepartment>
    <DialogEditDepartment ref="dialogEditDepartment"></DialogEditDepartment>
    <DialogDeleteItem ref="dialogDeleteItem"></DialogDeleteItem>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogAddDepartment from "@/components/DialogAddDepartment";
import DialogEditDepartment from "@/components/DialogEditDepartment";
import DialogDeleteItem from "@/components/DialogDeleteItem";

export default {
  name: "ListFaculties",
  components: {DialogDeleteItem, DialogEditDepartment, DialogAddDepartment, Header},
  created() {
    this.getData()
  },
  data() {
    return {
      title: "Danh sách khoa",
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '5%'
        },
        {
          text: 'Mã khoa',
          align: 'start',
          sortable: false,
          value: 'departmentId',
          width: '12%'
        },
        {
          text: 'Tên khoa',
          align: 'start',
          value: 'departmentName',
          width: '20%',
        },
        {
          text: 'Số lượng lớp',
          align: 'start',
          value: 'countClasses',
          sortable: false,
          width: '12%'
        },
        {
          text: 'Số lượng SV',
          align: 'start',
          value: 'countStudent',
          width: '12%'
        },
        {
          text: 'Số lượng CVHT',
          align: 'start',
          value: 'countTeachers',
          width: '14%'
        },
        {
          text: 'Giáo vụ',
          align: 'start',
          value: 'departmentAdminName',
          sortable: false,
          width: '18%',
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
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$services.AdminService.getDepartments()
          .then(res => {
            console.log(res.data)
            this.items = res.data
          })
    },
    edit(item) {
      this.$refs.dialogEditDepartment.openDialog(item)
      console.log("item : ", item)
    },
    deleteItem() {
      this.$refs.dialogDeleteItem.openDialog()
    },
    addNew(){
      this.$refs.dialogAddDepartment.openDialog()
    }
  }
}
</script>

<style scoped>
a{
  color: black !important;
}
.actions:hover {
  cursor: pointer;
}
</style>
