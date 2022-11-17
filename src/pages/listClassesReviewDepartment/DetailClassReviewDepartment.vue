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

          <v-dialog
              v-model="dialog"
              persistent
              max-width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  depressed
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  :disabled="!checkbox1"
              >
                Đồng ý duyệt
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Xác nhận duyệt
              </v-card-title>
              <v-card-text>
                Bạn chỉ được duyệt duy nhất một lần. Vui lòng kiểm tra kỹ trước khi duyệt.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    outlined
                    color="primary"
                    @click="dialog = false"
                >
                  Huỷ
                </v-btn>
                <v-btn
                    depressed
                    color="primary"
                    @click="backToList"
                >
                  Đồng ý
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-snackbar v-model="snackbar"
                    :color="color"
                    :timeout="3000"
                    absolute
                    top
                    centered>
          {{ message }}
        </v-snackbar>
      </div>

    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {tempDetail} from "@/testData"

export default {
  name: "DetailClassReviewDepartment",
  components: {Header},
  data() {
    return {
      title: "",
      option: {
        title: {
          text: "Tổng quan kết quả đánh giá rèn luyện",
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
              {value: 6, name: "Tốt"},
              {value: 3, name: "Xuất sắc"},
              {value: 1, name: "Trung bình"},
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
          value: 'userID',
          width: '10%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'name',
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
          value: 'totalStudentScore',
          width: '12%'
        },
        {
          text: 'CBL nhân chấm',
          align: 'start',
          value: 'totalMonitorScore',
          width: '12%'
        },
        {
          text: 'CVHT chấm',
          align: 'start',
          value: 'totalTeacherScore',
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
      checkbox1: false,
      dialog: false,
      pointFrame: [],
      snackbar: false,
      color: 'blue',
      message:''
    }
  },
  created() {
    this.items = tempDetail.map(item => {
      return {...item, diemTB : Math.floor((item.totalStudentScore + item.totalMonitorScore + item.totalTeacherScore)/3) }
    })
    // this.getData()
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
            this.pointFrame = res.body
          })
      this.$services.DepartmentSevice.listBrowseMark({markId: this.$route.params.markId})
          .then(res => {
            console.log(res.data)
            this.items = res.data
            for (let i = 0; i < this.items.length; i++) {
              this.items[i].diemTB = Math.round((this.items[i].totalStudentScore + this.items[i].totalMonitorScore + this.items[i].totalTeacherScore) / 3 * 100) / 100
              this.pointFrame.forEach(item => {
                if (this.items[i].diemTB <= item.maxPoint && this.items[i].diemTB >= item.minPoint) {
                  this.items[i].xepLoai = item.stringPoint
                }
              })
            }
          })
    },
    backToList() {
      this.$services.DepartmentSevice.browseMark({markId: this.$route.params.markId})
      .then(() => {
        this.snackbar = true
        this.message = 'Duyệt thành công'
        this.dialog = false
        this.$router.push('/listClassesReviewDepartment')
      })
      .catch( ()=>{
        this.snackbar = true
        this.message= 'Có lỗi xảy ra. Vui lòng thử lại sau!'
        this.color = 'red'
        this.dialog = false
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


<!--<!zxcbkkjzxbcjk&#45;&#45;&ndash;&gt;-->
