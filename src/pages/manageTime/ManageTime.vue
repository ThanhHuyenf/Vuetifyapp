<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div class="text-right">
            <v-btn outlined
                   color="primary"
                   @click="addNew">
              Thêm
            </v-btn>
          </div>
          <v-data-table :headers="headers"
                        :items="filteredItems"
                        fixed-header
                        class="elevation-1 rounded-0 mt-1"
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
    <DialogAddTime ref="dialogAddTime"></DialogAddTime>
    <DialogDeleteItem ref="dialogDeleteItem"></DialogDeleteItem>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogEditTime from "@/components/DialogEditTime";
import moment from "moment";
import DialogAddTime from "@/components/DialogAddTime";
import DialogDeleteItem from "@/components/DialogDeleteItem";

export default {
  name: "ManageTime",
  components: {DialogAddTime, DialogEditTime, Header, DialogDeleteItem},
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
          text: 'Năm học',
          align: 'left',
          sortable: false,
          value: 'namHoc',
          width: '10%'
        },
        {
          text: 'Học kỳ',
          align: 'left',
          sortable: false,
          value: 'semester',
          width: '7%'
        },
        {
          text: 'Thời gian cho SV',
          align: 'left',
          sortable: false,
          value: 'tgSV',
          width: '18%'
        },
        {
          text: 'Thời gian cho LT',
          align: 'left',
          sortable: false,
          value: 'tgLT',
          width: '18%'
        },
        {
          text: 'Thời gian cho GV',
          align: 'left',
          sortable: false,
          value: 'tgGV',
          width: '18%'
        },
        {
          text: 'Thời gian cho Khoa',
          align: 'left',
          sortable: false,
          value: 'tgK',
          width: '18%'
        },
        {
          text: 'Tác vụ',
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
    // this.getData()
  },
  methods: {
    getData() {
      this.$services.AdminService.getTime()
          .then(res => {
            console.log("res time", res)
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
      this.$refs.dialogDeleteItem.openDialog()
      console.log(item)
    },
    updated(item) {
      this.items= this.items.map(x => {
        if( x.id == item.id){
          x = item
        }
        return x
      })
    },
    addNew() {
      this.$refs.dialogAddTime.openDialog()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
