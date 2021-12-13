<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div>
            <Counter :year="2021"
                     :month="11"
                     :date="9"
                     :hours="16"
                     :minute="0"></Counter>
          </div>
          <v-row no-gutters align="end">
            <v-col cols="3">
              <v-subheader class="mb-n5">Da cham: {{ daCham }}/{{ items.length }}</v-subheader>
            </v-col>

            <v-col cols="4" class="ml-auto">
              <v-text-field
                  placeholder="Nhap ma sinh vien"
                  append-icon="mdi-magnify"
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0 mt-4"
          >
            <template v-slot:header.lop="{header}">
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
                      <v-list-item-title @click="filterClass= 'All' ">Tất cả</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-for="(item, index) in classes"
                                         :key="index"
                                         @click="filterClass= item.class">
                      <v-list-item-title>{{ item.class }}</v-list-item-title>
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
                      <v-list-item-title @click="type= true ">Đã chấm</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content @click="type= false ">
                      <v-list-item-title>Chưa chấm</v-list-item-title>
                    </v-list-item-content>
                  </v-list>
                </v-card>
              </v-menu>
            </template>

            <template v-slot:item.trangThai="{item}">
              <div v-if=item.trangThai>
                Đã chấm
              </div>
              <div v-else>
                Chưa chấm
              </div>
            </template>

            <template v-slot:item.tacVu="{ item }">
              <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
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
import {eventbus} from "@/main";
import Counter from "@/components/Counter";

export default {
  name: "ListMembersGV",
  components: {
    Counter,
    Header,
  },
  data() {
    return {
      title: "Danh sách thành viên",
      headers: [
        {
          text: 'STT',
          align: 'left',
          sortable: false,
          value: 'stt',
          width: '5%'
        },
        {
          text: 'Mã sinh viên',
          align: 'start',
          sortable: false,
          value: 'maSinhVien',
          width: '12%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'hoTen',
          width: '22%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
        },
        {
          text: 'Lớp',
          align: 'start',
          value: 'lop',
          sortable: false,
          width: '10%'
        },
        {
          text: 'Điểm cá nhân chấm',
          align: 'start',
          value: 'diemCaNhanCham',
          width: '14%'
        },
        {
          text: 'Điểm CBL nhân chấm',
          align: 'start',
          value: 'diemCBLNhanCham',
          width: '15%'
        },
        {
          text: 'Trạng thái',
          align: 'start',
          value: 'trangThai',
          sortable: false,
          width: '13%',
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '15%'
        }
      ],
      items: [
        {
          stt: 1,
          maSinhVien: '675105050',
          lop: "K67A",
          hoTen: 'Lê Thanh Huyền',
          diemCaNhanCham: 91,
          diemCBLNhanCham: 90,
          trangThai: true
        },
        {
          stt: 2,
          maSinhVien: '675105027',
          hoTen: 'Nguyễn Vũ Chí Dũng',
          lop: "K67B",
          diemCaNhanCham: 90,
          diemCBLNhanCham: 70,
          trangThai: true
        },
        {
          stt: 3,
          maSinhVien: '675105021',
          hoTen: 'Đinh Quang Đạo',
          lop: "K67C",
          diemCaNhanCham: 88,
          diemCBLNhanCham: 90,
          trangThai: true
        },
        {
          stt: 4,
          maSinhVien: '675105082',
          hoTen: 'Nguyễn Hải Long',
          lop: "K67D",
          diemCaNhanCham: 50,
          diemCBLNhanCham: 45,
          trangThai: false
        },
        {
          stt: 5,
          maSinhVien: '675105092',
          hoTen: 'Đỗ Ngọc Anh',
          lop: "K68C",
          diemCaNhanCham: 60,
          diemCBLNhanCham: 71,
          trangThai: true
        },
        {
          stt: 6,
          maSinhVien: '675105059',
          lop: "K67B",
          hoTen: 'Nguyen Van A',
          diemCaNhanCham: 91,
          diemCBLNhanCham: 90,
          trangThai: true
        },
        {
          stt: 7,
          maSinhVien: '675105011',
          lop: "K67D",
          hoTen: 'Lê Thi  B',
          diemCaNhanCham: 76,
          diemCBLNhanCham: 75,
          trangThai: false
        },
        {
          stt: 8,
          maSinhVien: '675105062',
          lop: "K67A",
          hoTen: 'Vu Cong Thanh',
          diemCaNhanCham: 88,
          diemCBLNhanCham: 70,
          trangThai: false
        },
        {
          stt: 9,
          maSinhVien: '675105091',
          lop: "K67C",
          hoTen: 'Dao Ngoc E',
          diemCaNhanCham: 91,
          diemCBLNhanCham: 89,
          trangThai: true
        },
        {
          stt: 10,
          maSinhVien: '675105050',
          lop: "K67A",
          hoTen: 'Tran Van B',
          diemCaNhanCham: 77,
          diemCBLNhanCham: 80,
          trangThai: true
        },
        {
          stt: 11,
          maSinhVien: '675105022',
          lop: "K68C",
          hoTen: 'Au Manh Quang',
          diemCaNhanCham: 70,
          diemCBLNhanCham: 91,
          trangThai: false
        },


      ],
      dialog: false,
      type: 'All',
      classes: [
        {class: "K67A"},
        {class: "K67B"},
        {class: "K67C"},
        {class: "K67D"},
        {class: "K68C"}
      ],
      filterClass: "All",
      // msv: '',
      flag: false
    }
  },

  computed: {
    filteredItems() {
      if (this.filterClass == "All" && this.type == "All") return this.items
      else if (this.filterClass !== "All" && this.type !== "All") {
        return this.items.filter(item => item.lop == this.filterClass && item.trangThai == this.type)
      } else {
        return this.items.filter(item => item.lop == this.filterClass || item.trangThai == this.type)
      }
    },
    daCham() {
      return this.items.filter(item => item.trangThai == true).length
    }
  },
  methods: {
    editItem(item) {
      this.dialog = true
      eventbus.$emit('hello', item)
    }
  }
}
</script>

<style scoped>

</style>
