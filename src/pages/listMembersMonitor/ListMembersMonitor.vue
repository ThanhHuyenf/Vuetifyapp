<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <Counter></Counter>
          <v-subheader class="mb-n2">Da cham: {{ daCham }}/{{ items.length }}</v-subheader>
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

            <template v-slot:item.tacVu="{item}">
              <router-link :to="{
                                 name: 'ListMembersMonitor.FormPoint',
                                 params: {id: item.userID}
              }">
                <v-icon
                    small
                    class="mr-2"
                >
                  mdi-pencil
                </v-icon>
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
import Counter from "@/components/Counter";

export default {
  name: "ListMembers",
  components: {
    Counter,
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
          width: '30%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
        },
        {
          text: 'Điểm cá nhân chấm',
          align: 'start',
          value: 'studentScore',
          width: '20%'
        },
        {
          text: 'Điểm lớp trưởng chấm',
          align: 'start',
          value: 'monitorScore',
          width: '20%'
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
      timer: []
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
      this.$services.MonitorService.getMembers()
      .then(res => {
        this.items= res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
