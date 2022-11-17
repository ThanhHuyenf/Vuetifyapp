<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div>
            <Counter :year="2023"
                     :month="11"
                     :date="20"
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

            <!-- <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
            </template> -->

            <template v-slot:header.className="{header}">
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
                                         @click="filterClass= item.className">
                      <v-list-item-title>{{ item.className }}</v-list-item-title>
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

<!--            <template v-slot:item.trangThai="{item}">-->
<!--              <div v-if=item.trangThai>-->
<!--                Đã chấm-->
<!--              </div>-->
<!--              <div v-else>-->
<!--                Chưa chấm-->
<!--              </div>-->
<!--            </template>-->

            <template v-slot:item.tacVu="{ item }">
              <router-link :to="{
                                 name: 'ListMembersTeacher.FormPoint',
                                 params: {id: item.userID}
              }">
                <v-icon
                    small
                    class="mr-2"
                >
                  mdi-pencil
                </v-icon>
              </router-link>

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
    <DialogChangePosition ref="dialofChangePostision"
                          @done-change="changeSuccess"></DialogChangePosition>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Counter from "@/components/Counter";
import DialogChangePosition from "@/components/Dialogs/ChangePosition";
import {listMemberTeacherData} from "@/testData/index.js"

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
        // {
        //   text: '#',
        //   align: 'left',
        //   sortable: false,
        //   value: 'index',
        //   width: '5%'
        // },
        {
          text: 'Mã sinh viên',
          align: 'start',
          sortable: false,
          value: 'userID',
          width: '15%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'name',
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
          value: 'className',
          sortable: false,
          width: '10%'
        },
        {
          text: 'Cá nhân chấm',
          align: 'start',
          value: 'studentScore',
          width: '15%'
        },
        {
          text: 'CBL nhân chấm',
          align: 'start',
          value: 'monitorScore',
          width: '15%'
        },
        {
          text: 'CVHT chấm',
          align: 'start',
          value: 'teacherScore',
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
      dialog: false,
      type: 'All',
      classes: [],
      filterClass: "All",
      search: ''
    }
  },
  created() {
    // this.getData()
    console.log("listMemberTeacherData", listMemberTeacherData);
    this.items = listMemberTeacherData
  },
  computed: {
    filteredItems() {
      if (this.filterClass == "All" && this.type == "All") return this.items
      else if (this.filterClass !== "All" && this.type !== "All") {
        return this.items.filter(item => item.className == this.filterClass && item.trangThai == this.type)
      } else {
        return this.items.filter(item => item.className == this.filterClass || item.trangThai == this.type)
      }
    },
    daCham() {
      return this.items.filter(item => item.trangThai == true).length
    }
  },
  methods: {
    getData() {
      this.$services.TeacherService.getMembers()
          .then(res => {
            console.log(res.data)
            this.items = res.data
          })

      this.$services.TeacherService.getClasses()
          .then(res => {
            this.classes = res.data
          })
    },
    editItem(item) {
      this.dialog = true
      return item
    },
    editPostision(item) {
      this.$refs.dialofChangePostision.openDialog(item)
    }
    ,
    changeSuccess(){
      this.getData()
    }
  }

}
</script>

<style scoped>

</style>
