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
              {{ filteredItems.indexOf(item) +1}}
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
    <DialogTime ref="dialogTime" @done-edit="updated"></DialogTime>

<!--    <DialogTimeNew ref="dialogTimeNew"></DialogTimeNew>-->

  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogTime from "@/components/DialogTime";
// import DialogTimeNew from "@/components/DialogTimeNew";

export default {
  name: "ManageTime",
  components: { DialogTime, Header},
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
          value: 'hocKy',
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
      items: [
        {
          namHoc: '2020-2021',
          hocKy: 1,
          tgSV: '12/12/2021 - 13/12/2021',
          tgLT: '12/12/2021 - 13/12/2021',
          tgGV: '12/12/2021 - 13/12/2021',
          tgK: '12/12/2021 - 13/12/2021',
        },
        {
          namHoc: '2020-2021',
          hocKy: 2,
          tgSV: 'huyfnn',
          tgLT: '',
          tgGV: '',
          tgK: '',
        }
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){

    },
    editItem(item) {
      this.$refs.dialogTime.openDialog( item)
    },
    deleteItem(item){
      console.log(item)
    },
    updated(){

    },
    addNew(){
      this.$refs.dialogTimeNew.openDialog()
    }
  }
}
</script>

<style scoped>

</style>
