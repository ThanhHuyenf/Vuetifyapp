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
                                   class: item.lop,
                                   hocKy: 1,
                                   namHoc: '2020-2021'
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
          value: 'lop',
          width: '6%'
        },
        {
          text: 'Cố vấn học tập',
          align: 'start',
          value: 'coVan',
          sortable: false,
          width: '15%'
        },
        {
          text: 'Xuất sắc',
          align: 'left',
          sortable: false,
          value: 'xuatSac',
          width: '7%'
        },
        {
          text: 'Tốt',
          align: 'left',
          sortable: false,
          value: 'tot',
          width: '6%'
        },
        {
          text: 'Khá',
          align: 'left',
          sortable: false,
          value: 'kha',
          width: '6%'
        },
        {
          text: 'TB khá',
          align: 'left',
          sortable: false,
          value: 'tbkha',
          width: '6%'
        },
        {
          text: 'TB',
          align: 'left',
          sortable: false,
          value: 'tb',
          width: '6%'
        }, {
          text: 'Yếu',
          align: 'left',
          sortable: false,
          value: 'yeu',
          width: '6%'
        }, {
          text: 'Kém',
          align: 'left',
          sortable: false,
          value: 'kem',
          width: '6%'
        },
        {
          text: 'Tong so',
          align: 'start',
          value: 'tongSo',
          sortable: false,
          width: '6%'
        },
        {
          text: 'Trạng thái',
          align: 'start',
          value: 'trangThai',
          sortable: false,
          width: '10%'
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
    this.items = [{
      lop: '67A',
      coVan: 'Nguyễn Thanh Huyền',
      xuatSac : 5,
      tot: 20,
      kha: 8,
      tbkha: 0,
      tb: 0,
      yeu: 0,
      kem: 0,
      tongSo: 33
    },
      {
        lop: '67B',
        coVan: 'Nguyễn Thị Hạnh',
        xuatSac : 2,
        tot: 22,
        kha: 5,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 29
      },
      {
        lop: '67C',
        coVan: 'Đoàn Thị Quế',
        xuatSac : 1,
        tot: 25,
        kha: 3,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 28
      },
      {
        lop: '67D',
        coVan: 'Nguyễn Thị Hạnh',
        xuatSac : 4,
        tot: 20,
        kha: 6,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 30
      },
      {
        lop: '68A',
        coVan: 'Nguyễn Thị Quỳnh Hoa',
        xuatSac : 5,
        tot: 20,
        kha: 8,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 33
      },
      {
        lop: '68B',
        coVan: 'Nguyễn Thị Quỳnh Hoa',
        xuatSac : 2,
        tot: 22,
        kha: 5,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 29
      },
      {
        lop: '68C',
        coVan: 'Đinh Hải Long',
        xuatSac : 1,
        tot: 25,
        kha: 3,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 28
      },
      {
        lop: '68D',
        coVan: 'Nguyễn Thị Hạnh',
        xuatSac : 4,
        tot: 20,
        kha: 6,
        tbkha: 0,
        tb: 0,
        yeu: 0,
        kem: 0,
        tongSo: 30
      }]
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
      this.$axios.get("http://localhost:3000/listClassTeacher")
      .then(res => {
        this.items = res.data
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
