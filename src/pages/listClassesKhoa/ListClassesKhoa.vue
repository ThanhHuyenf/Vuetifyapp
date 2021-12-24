<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="pa-4">
          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0 mt-4"
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
                    <v-list-item-title @click="edit(item)">Chỉnh sửa</v-list-item-title>

                    <router-link :to="{
                                 name: 'DetailClass',
                                 params: {
                                   khoa: item.khoa,
                                   class: item.lop,
                                 }
              }">
                      <v-list-item-title>Xem chi tiết</v-list-item-title>
                    </router-link>

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

  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogDeleteItem from "@/components/DialogDeleteItem";
import DialogEditClass from "@/components/DialogEditClass";

export default {
  name: "ListClassesKhoa",
  components: {DialogEditClass, DialogDeleteItem, Header},
  created() {
    this.getData()
  },
  data() {
    return {
      title: 'Danh sach lop',
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
          value: 'khoa',
          width: '15%'
        },
        {
          text: 'Lớp',
          align: 'start',
          sortable: false,
          value: 'lop',
          width: '15%'
        },
        {
          text: 'Sĩ số',
          align: 'start',
          value: 'siSo',
          width: '15%'
        },
        {
          text: 'Cố vấn',
          align: 'start',
          value: 'coVan',
          width: '25%'
        },
        {
          text: 'Thời gian',
          align: 'start',
          sortable: false,
          value: 'thoiGian',
          width: '20%'
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
  computed: {
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$axios.get('http://localhost:3000/listLopCuaKhoa')
          .then(res => {
            this.items = res.data
          })
    },
    edit(item) {
      this.$refs.dialogEditItem.openDialog(item)
    },
    deleteItem(item){
      this.$refs.dialogDelete.openDialog(item)
    }
  }
}
</script>

<style scoped>

</style>
