<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4" style="margin-left:200px; margin-right: 200px ">
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
              :hide-default-footer="true"
              class="elevation-1 rounded-0"
          >
            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
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
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-item-group>
        <DialogPointFrame ref="dialofPointFrame" @done="reloadData"></DialogPointFrame>
        <DialogDeleteItem ref="dialogDeleteItem" @accept="onDeleting"></DialogDeleteItem>
        <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            absolute
            bottom
            center
            color="blue"
        >
          {{message}}
        </v-snackbar>
      </div>

    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogPointFrame from "@/components/DialogPointFrame";
import DialogDeleteItem from "@/components/DialogDeleteItem";

export default {
  name: "PointFrame",
  components: {DialogDeleteItem, DialogPointFrame, Header},
  data() {
    return {
      title: 'Khung điểm rèn luyện',
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '7%'
        },
        {
          text: "Điểm số",
          value: "diemSo",
          sortable: false,
          width: "25%"
        },
        {
          text: "Điểm chữ",
          value: "stringPoint",
          sortable: false,
          width: "30%"
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '10%'
        }
      ],
      items: [],
      snackbar: false,
      message: ''
    }
  },
  created() {
    this.getData()
  },
  computed: {
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$services.PointingService.getPointFrame()
          .then(res => {
            this.items = res.body
            for (let i = 0; i < this.items.length; i++) {
              this.items[i].diemSo = res.body[i].minPoint + " - " + res.body[i].maxPoint
            }
          })
    },
    reloadData(type) {
      this.getData()
      this.snackbar= true
      type == 'addnew' ? this.message = 'Thêm khung điểm mới thành công' : this.message = 'Chỉnh sửa khung điểm thành công'
    },
    addNew() {
      this.$refs.dialofPointFrame.openDialog('addnew')
    },
    editItem(item) {
      this.$refs.dialofPointFrame.openDialog('update', item)
    },
    deleteItem(item) {
      this.$refs.dialogDeleteItem.openDialog(item)
    },
    onDeleting(item) {
      this.$services.PointingService.deletePointFrame({id: item.id})
          .then(() => {
            this.$refs.dialogDeleteItem.closeDialog()
            this.getData()
            this.snackbar= true
            this.message= 'Xóa khung điểm thành công'
          })
    }
  }
}
</script>

<style scoped>

</style>
