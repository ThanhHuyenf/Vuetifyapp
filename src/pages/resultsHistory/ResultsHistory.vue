<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-7 pa-4">
          <v-data-table
              :headers="headers"
              :items="items"
              item-key="text"
              :hide-default-footer="true"
              class="elevation-1 rounded-0"
          >
          </v-data-table>
        </v-item-group>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "ResultsHistory",
  components: {Header},
  data() {
    return {
      title: 'Kết quả điểm rèn luyện',
      headers: [
        {
          text: "Học kỳ",
          value: "semester",
          sortable: false,
          width: "10%"
        },
        {
          text: "Năm học",
          value: "namHoc",
          sortable: false,
          width: "25%"
        },
        {
          text: "Tổng điểm",
          value: "tongDiem",
          sortable: false,
          width: "30%"
        },
        {
          text: "Xếp loại",
          value: "xepLoai",
          sortable: false,
          width: "35%"
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
      this.$services.PointingService.getHistory()
          .then(res => {
            this.items = [...res.body]
            this.items.forEach((element, index) => {
              element.namHoc = res.body[index].startYear + " - " + res.body[index].endYear
              element.tongDiem = Math.round(((res.body[index].totalStudentPoint ? res.body[index].totalStudentPoint : 0) + (res.body[index].totalMonitorPoint ? res.body[index].totalMonitorPoint : 0) + (res.body[index].totalTeacherPoint ? res.body[index].totalTeacherPoint : 0)) / 3 * 100) / 100
            })
          })
    }
  }
}
</script>

<style scoped>

</style>
