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

            <template v-slot:header.coVan="{header}">
              {{ header.text }}
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="ml-n4" small color="white">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <v-card class="pa-4 py-0" style="cursor: pointer">
                  <v-list>

                    <v-list-item-content>
                      <v-list-item-title @click="filterCoVan= 'All' ">Tất cả</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-for="item in listCoVan"
                                         :key="item.name"
                                         @click="filterCoVan= item.name">
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>

                  </v-list>
                </v-card>
              </v-menu>
            </template>

            <template v-slot:header.trangThai="{ header }">
              {{ header.text }}
              <v-menu offset-y>

                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="ml-n4" small color="white">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>

                <v-card class="pa-4 py-0" style="cursor: pointer">
                  <v-list>

                    <v-list-item-content @click="type= 'All' ">
                      <v-list-item-title>Tất cả</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content>
                      <v-list-item-title @click="type= true ">Đã duyệt</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content @click="type= false ">
                      <v-list-item-title>Chưa duyệt</v-list-item-title>
                    </v-list-item-content>
                  </v-list>
                </v-card>
              </v-menu>
            </template>

            <template v-slot:item.trangThai="{item}">
              <div v-if=item.trangThai>
                Đã duyệt
              </div>
              <div v-else>
                Chưa duyệt
              </div>
            </template>

            <template v-slot:item.duyet="{ item }" @click="edit(item)">

              <router-link :to="{
                                 name: 'QuanLyDuyetKhoa.Detail',
                                 params: {
                                   class: item.lop,
                                   hocKy: 1,
                                   namHoc: '2020-2021'
                                 }
              }">
                <div class="detail-class">Xem chi tiết</div>
              </router-link>

            </template>

          </v-data-table>
        </v-item-group>
      </div>
    </Header>
  </div>

</template>

<script>

import Header from "@/components/Header";
export default {
  name: "ListClassesKhoa",
  components: {
    Header
  },
  data() {
    return {
      title: 'Danh sách lớp học',
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '7%'
        },
        {
          text: 'Lớp',
          align: 'start',
          value: 'lop',
          width: '15%'
        },
        {
          text: 'Cố vấn học tập',
          align: 'start',
          value: 'coVan',
          sortable: false,
          width: '20%'
        },
        {
          text: 'Số phiếu điểm rèn luyện',
          align: 'start',
          value: 'soPhieu',
          sortable: false,
          width: '20%'
        },
        {
          text: 'Trạng thái',
          align: 'start',
          value: 'trangThai',
          sortable: false,
          width: '15%'
        },
        {
          text: 'Duyệt',
          align: 'start',
          sortable: false,
          value: 'duyet',
          width: '15%'
        }
      ],
      items: [],
      listCoVan: [],
      filterCoVan: 'All',
      type: 'All'
    }
  },
  created() {
    this.getData()
  },
  computed: {
    filteredItems() {
      if (this.filterCoVan == "All" && this.type == "All") return this.items
      else if (this.filterCoVan !== "All" && this.type !== "All") {
        return this.items.filter(item => item.coVan == this.filterCoVan && item.trangThai == this.type)
      } else {
        return this.items.filter(item => item.coVan == this.filterCoVan || item.trangThai == this.type)
      }
    }
  },
  methods: {
    getData() {
      this.$axios.get('http://localhost:3000/listClassesKhoa')
          .then(res => {
            this.items = res.data
          })

      this.$axios.get('http://localhost:3000/listCoVanClassesKhoa')
          .then(res => {
            this.listCoVan = res.data
          })
    },
    editItem(item) {
      this.$refs.classKhoa.openDialog('update', item)
    }
  }
}
</script>

<style scoped>
.detail-class{
  cursor: pointer;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.87);
}
</style>
