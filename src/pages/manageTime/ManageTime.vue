<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div class="text-center red--text mb-4">
            <v-btn @click="addNew">
              Them
            </v-btn>
          </div>
          <v-data-table :headers="headers"
                        :items="filteredItems"
                        fixed-header
          >
            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
            </template>

            <template v-slot:item.tacVu="{item}">
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
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-item-group>
      </div>
    </Header>
    <DialogEditTime ref="dialogTime" @done-edit="updated"></DialogEditTime>

    <!--    <DialogTimeNew ref="dialogTimeNew"></DialogTimeNew>-->

  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogEditTime from "@/components/DialogEditTime";
import moment from "moment";
// import DialogTimeNew from "@/components/DialogTimeNew";

export default {
  name: "ManageTime",
  components: {DialogEditTime, Header},
  computed: {
    filteredItems() {
      return this.items
    }
  },
  data() {
    return {
      title: "Quản lý thời gian xét điểm",
      dialog: false,
      titleDialog: 'Chỉnh sửa thời gian',
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '4%',

        },
        {
          text: 'Nam hoc',
          align: 'left',
          sortable: false,
          value: 'namHoc',
          width: '10%'
        },
        {
          text: 'Hoc ky',
          align: 'left',
          sortable: false,
          value: 'semester',
          width: '7%'
        },
        {
          text: 'Thoi gian cho SV',
          align: 'left',
          sortable: false,
          value: 'tgSV',
          width: '18%'
        },
        {
          text: 'Thoi gian cho LT',
          align: 'left',
          sortable: false,
          value: 'tgLT',
          width: '18%'
        },
        {
          text: 'Thoi gian cho GV',
          align: 'left',
          sortable: false,
          value: 'tgGV',
          width: '18%'
        },
        {
          text: 'Thoi gian cho Khoa',
          align: 'left',
          sortable: false,
          value: 'tgK',
          width: '18%'
        },
        {
          text: 'Tac vu',
          align: 'left',
          sortable: false,
          value: 'tacVu',
          width: '8%'
        },
      ],
      items: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$services.AdminService.getTime()
          .then(res => {
            this.items = res.data
            for (let i = 0; i < res.data.length; i++) {
              this.items[i].namHoc = res.data[i].startYear + " - " + res.data[i].endYear
              this.items[i].tgSV = this.formatTime(res.data[i].startTimeStudent, res.data[i].endTimeStudent)
              this.items[i].tgLT = this.formatTime(res.data[i].startTimeMonitor, res.data[i].endTimeMonitor)
              this.items[i].tgGV = this.formatTime(res.data[i].startTimeHeadMaster, res.data[i].endTimeHeadMaster)
              this.items[i].tgK = this.formatTime(res.data[i].startTimeDepartment, res.data[i].endTimeDepartment)
            }
          })
    },
    formatTime(date1, date2) {
      return moment(date1, 'YYYY-MM-DD').format('DD/MM/YYYY') + ' - '
          + moment(date2, 'YYYY-MM-DD').format('DD/MM/YYYY')
    },
    editItem(item) {
      this.$refs.dialogTime.openDialog(item)
    },
    deleteItem(item) {
      console.log(item)
    },
    updated(item) {
      this.item = item
    },
    addNew() {
      this.$refs.dialogTimeNew.openDialog()
    }
  }
}
</script>

<style scoped>

</style>
