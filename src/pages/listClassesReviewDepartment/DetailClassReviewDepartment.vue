<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <div class="justify-center d-flex mt-5">
          <v-chart class="chart" :option="option"></v-chart>
        </div>
        <div class="mt-5">
          <v-item-group class="pa-4">
            <v-data-table
                :headers="headers"
                :items="filteredItems"
                hide-default-footer
                items-per-page="200"
                item-key="text"
                class="elevation-1 rounded-0 mt-4"
            >
              <template #item.index="{ item }">
                {{ items.indexOf(item) + 1 }}
              </template>
            </v-data-table>
          </v-item-group>
        </div>
        <div class="pl-3 mb-8">
          <v-checkbox v-model="checkbox1" label="Tôi đồng ý với các dữ liệu như trên!"></v-checkbox>
          <v-btn
              depressed
              color="primary"
              :disabled="!checkbox1"
          >
            Đồng ý duyệt
          </v-btn>
          <!--        <v-btn>Đồng ý duyệt</v-btn>-->
        </div>
      </div>

    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "DetailClassReviewDepartment",
  components: {Header},
  data() {
    return {
      title: "",
      option: {
        title: {
          text: "Tổng quan",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: "25px",
          data: ["Xuất sắc", "Tốt", "Khá", "Trung bình khá", "Trung bình", "Yếu", "Kém"]
        },
        series: [
          {
            name: "Tổng quan",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {value: 12, name: "Xuất sắc"},
              {value: 12, name: "Tốt"},
              {value: 8, name: "Khá"},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
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
          width: '18%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
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
          text: 'Điểm trung bình',
          align: 'start',
          value: 'diemTB',
          sortable: false,
          width: '10%'
        },
        {
          text: 'Xếp loại',
          align: 'start',
          value: 'xepLoai',
          sortable: false,
          width: '10%'
        }
      ],
      items: [],
      filterClass: "All",
      type: "All",
      checkbox1: false
    }
  },
  created() {
    this.title = "Chi tiết điểm rèn luyện lớp " + this.$route.params.class
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
    }
  },
  methods: {
    getData() {
      this.$axios.get('http://localhost:3000/listMembersGV')
          .then(res => {
            console.log(res.data)
            this.items = res.data
          })
    }
  }
}
</script>

<style scoped>
.chart {
  height: 50vh;
  width: 50vh;
}
</style>
