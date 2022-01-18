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
              fixed-header
              class="elevation-1 rounded-0 mt-4"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
            </template>

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

              <v-icon
                  small
                  class="mr-2"
                  @click="editPostision(item)"
              >
                mdi-wrench
              </v-icon>
            </template>
          </v-data-table>
        </v-item-group>
      </div>
    </Header>
    <!--    <FormDiemLT :dialog.sync="dialog"></FormDiemLT>-->
    <DialogChangePosition ref="dialofChangePostision"></DialogChangePosition>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {eventbus} from "@/main";
import Counter from "@/components/Counter";
import DialogChangePosition from "@/components/DialogChangePosition";

export default {
  name: "ListMembersGV",
  components: {
    DialogChangePosition,
    Counter,
    Header,
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
          text: 'Mã sinh viên',
          align: 'start',
          sortable: false,
          value: 'maSinhVien',
          width: '10%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'hoTen',
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
          text: 'Lớp',
          align: 'start',
          value: 'lop',
          sortable: false,
          width: '10%'
        },
        {
          text: 'Cá nhân chấm',
          align: 'start',
          value: 'diemCaNhanCham',
          width: '12%'
        },
        {
          text: 'CBL nhân chấm',
          align: 'start',
          value: 'diemCBLNhanCham',
          width: '12%'
        },
        {
          text: 'CVHT chấm',
          align: 'start',
          value: 'diemGVNhanCham',
          width: '12%'
        },
        {
          text: 'Trạng thái',
          align: 'start',
          value: 'trangThai',
          sortable: false,
          width: '11%',
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
      dialog: false,
      type: 'All',
      classes: [],
      filterClass: "All",
    }
  },
  created() {
    this.getData()
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
    getData() {
      this.$axios.get('http://localhost:3000/listMembersGV')
          .then(res => {
            this.items = res.data
          })
      this.$axios.get('http://localhost:3000/listClassesGV')
      .then(res => {
        this.classes = res.data
      })
    },
    editItem(item) {
      this.dialog = true
      eventbus.$emit('hello', item)
    },
    editPostision(item){
      this.$refs.dialofChangePostision.openDialog(item)
    }
  }

}
</script>

<style scoped>

</style>
