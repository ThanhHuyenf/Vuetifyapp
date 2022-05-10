<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <div class="text-right mb-2">
            <v-btn outlined
                   color="primary"
                   @click="addNew">
              Thêm
            </v-btn>
          </div>

          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) +1}}
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
                      <v-list-item-title @click="type= 'Done' ">Đã chấm</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content @click="type= 'NotDone' ">
                      <v-list-item-title>Chưa chấm</v-list-item-title>
                    </v-list-item-content>
                  </v-list>
                </v-card>
              </v-menu>
            </template>

            <template v-slot:item.monitorScore="{item}">
              <div v-if="item.monitorScore > 0">
                {{item.monitorScore}}
              </div>
              <div v-else>
                -
              </div>
            </template>

            <template v-slot:item.trangThai="{item}">
              <div v-if="item.monitorScore > 0">
                Đã chấm
              </div>
              <div v-else>
                Chưa chấm
              </div>
            </template>

            <template v-slot:item.tacVu="{item}">
                <v-icon
                    small
                    class="mr-2"
                >
                  mdi-pencil
                </v-icon>

              <v-icon
                  small
                  class="mr-2"
                  @click="dialogDeleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-item-group>
        <v-snackbar v-model="snackbar"
                    :color="color"
                    :timeout="3000"
                    absolute
                    top
                    centered>
          {{ message }}
        </v-snackbar>
        <DialogAddStudent ref="dialogAddStudent" @success="updating" @fail="cantUpdate"></DialogAddStudent>
        <DialogDeleteItem ref="dialogDeleteItem" @accept = "ondeleting"></DialogDeleteItem>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
import moment from "moment";
import DialogAddStudent from "@/components/DialogAddStudent";
import DialogDeleteItem from "@/components/DialogDeleteItem";

export default {
  name: "ListMembersAdmin",
  components: {
    DialogDeleteItem,
    DialogAddStudent,
    Header
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
          width: '7%'
        },
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
          width: '25%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
        },
        {
          text: 'Email',
          align: 'start',
          value: 'email',
          width: '15%'
        },
        {
          text: 'Thời gian tạo',
          align: 'start',
          value: 'createdAt',
          width: '15%'
        },
        {
          text: 'Update lần cuối',
          align: 'start',
          value: 'updatedAt',
          sortable: false,
          width: '15%',
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
      daCham: 0,
      dialog: false,
      type: 'All',
      timer: [],
      snackbar: false,
      message: '',
      color: 'blue'
    }
  },
  created() {
    this.getData()
    this.daCham = this.items.filter(item => item.trangThai == true).length

  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredItems() {
      if (this.type === "All") return this.items
      if (this.type === "Done") return this.items.filter(item => item.trangThai == true)
      if (this.type === "NotDone") return this.items.filter(item => item.trangThai !== true)
    }
  },
  methods: {
    getData(){
      this.$services.AdminService.getListStudent()
          .then(res => {
            console.log("ré", res)
            this.items = res.body
            this.items.map(x => {
              x.createdAt =  moment(x.createdAt, 'YYYY-MM-DD').format('DD/MM/YYYY')
              x.updatedAt =  moment(x.createdAt, 'YYYY-MM-DD').format('DD/MM/YYYY')
            })
          })
    },
    addNew(){
      this.$refs.dialogAddStudent.openDialog()
    },
    dialogDeleteItem(item){
      this.$refs.dialogDeleteItem.openDialog(item)
    },
    ondeleting(item){
      console.log("item la", item)
    },
    updating(){
      this.getData()
      this.snackbar = true
      this.message= 'Upload file thành công'
    },
    cantUpdate(){
      this.snackbar = true
      this.message= 'Upload file không thành công thành công. Vui lòng kiểm tra lại!'
      this.color = 'red'
    }
  }
}
</script>

<style scoped>

</style>
