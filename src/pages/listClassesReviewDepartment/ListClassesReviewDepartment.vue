<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
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

<!--            <template v-slot:item.tacVu="{ item }" @click="edit(item)">-->
<!--              -->
<!--              Xem chi tiết-->
<!--            </template>-->

            <template v-slot:item.tacVu="{ item }" @click="edit(item)">

              <router-link :to="{
                                 name: 'QuanLyDuyetKhoa.Detail',
                                 params: {
                                   markId: item.markId
                                 }
              }">
                <div class="detail-class">Chi tiết</div>
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
  name: "ListClassGV",
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
          width: '3%'
        },
        {
          text: 'Lớp',
          align: 'start',
          value: 'className',
          width: '6%'
        },
        {
          text: 'Cố vấn học tập',
          align: 'start',
          value: 'teacherName',
          sortable: false,
          width: '15%'
        },
        {
          text: 'Năm học',
          align: 'left',
          sortable: false,
          value: 'namHoc',
          width: '7%'
        },
        {
          text: 'Học kỳ',
          align: 'left',
          sortable: false,
          value: 'semester',
          width: '6%'
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '8%'
        }
      ],
      items: [],
      listCoVan: [
        {name: 'Le Thanh Huyen'},
        {name: 'Nguyen Van A'}
      ],
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
    getData(){

      this.$services.TeacherService.getListClass()
      .then(res => {
        console.log("item class", res)
        this.items = res.body
        for(let i =0; i< this.items.length; i++){
          this.items[i].namHoc = res.body[i].startYear + ' - ' +res.body[i].endYear
        }
      })
    },
    edit(item) {
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
