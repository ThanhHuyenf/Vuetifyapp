<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="pa-4">

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
                    <!--                    <v-icon>mdi-facebook</v-icon>-->
                    <v-list-item-title @click="edit(item)">Chỉnh sửa</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <router-link :to="{
                                 name: 'QuanLyDuyetKhoa.Detail',
                                 params: {
                                   markId: item.className,
                                 }
              }">
                      <v-list-item-title>Xem chi tiết</v-list-item-title>
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
    <DialogEditClass ref="dialogEditItem"></DialogEditClass>
    <DialogDeleteItem ref="dialogDelete"></DialogDeleteItem>
    <DialogAddClasses ref="dialogAddClasses"></DialogAddClasses>

  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogDeleteItem from "@/components/Dialogs/DeleteItem";
import DialogEditClass from "@/components/Dialogs/EditClass";
import DialogAddClasses from "@/components/Dialogs/AddClasses";
import {listClassesDepartment} from "@/testData"

export default {
  name: "ListClassesKhoa",
  components: {DialogAddClasses, DialogEditClass, DialogDeleteItem, Header},
  // created() {
  //   // this.getData()
  // },
  data() {
    return {
      title: 'Danh sách lớp',
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '7%'
        },
        {
          text: 'Khoá',
          align: 'start',
          value: 'courseName',
          width: '15%'
        },
        {
          text: 'Lớp',
          align: 'start',
          sortable: false,
          value: 'className',
          width: '15%'
        },
        {
          text: 'Sĩ số',
          align: 'start',
          value: 'count',
          width: '15%'
        },
        {
          text: 'Cố vấn',
          align: 'start',
          value: 'headMasterName',
          width: '25%'
        },
        {
          text: 'Thời gian',
          align: 'start',
          sortable: false,
          value: 'thoiGian',
          width: '15%'
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '10%'
        },
      ],
      items: [],
      actions: [
        {
          title: "Chỉnh sửa",
        },
        {
          title: "Xem chi tiết"
        },
        {
          title: "Xoá"
        }
      ]
    }
  },
  created(){
    this.items = listClassesDepartment
  },
  computed: {
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$services.DepartmentSevice.getClasses()
          .then(res => {
            console.log(res.data)
            this.items = res.data
            for (let i = 0; i < res.data.length; i++) {
              this.items[i].thoiGian = res.data[i].startYear + " - " + res.data[i].endYear
            }
          })
    },
    addNew() {
      this.$refs.dialogAddClasses.openDialog()
    },
    edit(item) {
      this.$refs.dialogEditItem.openDialog(item)
    },
    deleteItem(item) {
      this.$refs.dialogDelete.openDialog(item)
    }
  }
}
</script>

<style scoped>
a {
  color: black !important;
}
</style>
