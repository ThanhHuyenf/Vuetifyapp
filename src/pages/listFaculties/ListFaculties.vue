<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              fixed-header
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
                  </v-list-item>
                  <v-list-item>
                    <router-link :to="{
                                 name: 'DetailFaculty',
                                 params: {
                                   tenKhoa: item.khoa,
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
    <!--    <FormDiemLT :dialog.sync="dialog"></FormDiemLT>-->
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "ListFaculties",
  components: {Header},
  created() {
    this.getData()
  },
  data() {
    return {
      title: "Danh sách thành viên",
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
          value: 'maKhoa',
          width: '12%'
        },
        {
          text: 'Tên khoa',
          align: 'start',
          value: 'tenKhoa',
          width: '20%',
        },
        {
          text: 'Số lượng lớp',
          align: 'start',
          value: 'soLuongLop',
          sortable: false,
          width: '12%'
        },
        {
          text: 'Số lượng SV',
          align: 'start',
          value: 'soLuongSV',
          width: '12%'
        },
        {
          text: 'Số lượng giảng viên',
          align: 'start',
          value: 'soLuongGV',
          width: '14%'
        },
        {
          text: 'Giáo vụ',
          align: 'start',
          value: 'giaoVu',
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
      this.$axios.get("http://localhost:3000/listFaculties")
          .then(res => {
            this.items = res.data
          })
    },
    edit(item) {
      return item
    },
    deleteItem(item) {
      return item
    }
  }
}
</script>

<style scoped>
a{
  color: black !important;
}
</style>
