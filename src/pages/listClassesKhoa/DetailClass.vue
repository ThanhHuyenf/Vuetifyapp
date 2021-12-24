<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="pa-4">
          <v-data-table
              :headers="headers"
              :items="items"
              item-key="text"
              class="elevation-1 rounded-0 mt-4"
          >
            <template #item.index="{ item }">
              {{ items.indexOf(item) + 1 }}
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
  name: "DetailClass",
  components: {Header},
  data() {
    return {
      title: "Thông tin lớp",
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '3%'
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
          value: 'hocKy',
          width: '6%'
        },
        {
          text: 'Sĩ số',
          align: 'left',
          sortable: false,
          value: 'siSo',
          width: '5%'
        },
        {
          text: 'Giảng viên cô vấn',
          align: 'left',
          sortable: false,
          value: 'coVan',
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
          text: 'Tổng',
          align: 'left',
          sortable: false,
          value: 'tong',
          width: '6%'
        },

      ],
      items: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('http://localhost:3000/detailClass')
          .then(res => {
            this.items = res.data
          })
    }
  }
}
</script>

<style scoped>

</style>
