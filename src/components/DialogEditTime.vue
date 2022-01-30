<template>
  <div>
    <v-dialog v-model="dialog"
              persistent
              width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Chỉnh sửa thời gian chấm điểm RL
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-row>
            <v-col cols="6">
              <v-text-field label="Năm học" v-model="timeDetail.namHoc"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-autocomplete label="Học kỳ"
                              value="timeDetail.semester"
                              :items="hocKy">
              </v-autocomplete>
            </v-col>
          </v-row>
          <!--          menuSV: quản lý datepicker của sv-->
          <v-menu
              ref="menuSV"
              v-model="menuSV"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="timeDetail.tgSV"
                  label="Thời gian sinh viên chấm điểm"
                  :return-value.sync="dateSV"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateSV"
                no-title
                scrollable
                range
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuSV = false"
              >
                Huỷ
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="saveDateSV(dateSV)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-menu
              ref="menuLT"
              v-model="menuLT"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="timeDetail.tgLT"
                  label="Thời gian lớp trưởng chấm điểm"
                  :return-value.sync="dateLT"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateLT"
                no-title
                scrollable
                range
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuLT = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="saveDateLT(dateLT)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-menu
              ref="menuGV"
              v-model="menuGV"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="timeDetail.tgGV"
                  label="Thời gian giảng viên chấm điểm"
                  :return-value.sync="dateGV"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateGV"
                no-title
                scrollable
                range
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuGV = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="saveDateGV(dateGV)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-menu
              ref="menuK"
              v-model="menuK"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="timeDetail.tgK"
                  label="Thời gian khoa duyệt"
                  :return-value.sync="dateK"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateK"
                no-title
                scrollable
                range
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuK = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="saveDateK(dateK)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="saveTime()"
          >
            Đồng ý
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import moment from "moment";

export default {
  name: "DialogTime",
  data() {
    return {
      dialog: false,
      hocKy: ['1', '2'],
      timeDetail: [],
      menuSV: false,
      menuLT: false,
      menuGV: false,
      menuK: false,
      dateSV: [],
      dateLT: [],
      dateGV: [],
      dateK: [],
      temp: []
    }
  },
  methods: {
    openDialog(item) {
      //Nhận item từ component cha
      this.timeDetail = item
      //Format cho đúng định dạng để truyền vào datepicker
      this.dateSV = this.timeDetail.tgSV.split(" - ").map(item => {
        return moment(item, 'DD/MM/YYYY').format('YYYY-MM-DD')
      })
      this.dateLT = this.timeDetail.tgLT.split(" - ").map(item => {
        return moment(item, 'DD/MM/YYYY').format('YYYY-MM-DD')
      })
      this.dateGV = this.timeDetail.tgGV.split(" - ").map(item => {
        return moment(item, 'DD/MM/YYYY').format('YYYY-MM-DD')
      })
      this.dateK = this.timeDetail.tgK.split(" - ").map(item => {
        return moment(item, 'DD/MM/YYYY').format('YYYY-MM-DD')
      })
      //Mở dialog
      this.dialog = true
    },

    formatDate(date1, date2) {
      return moment(date1, 'YYYY-MM-DD').format('DD/MM/YYYY') + ' - '
          + moment(date2, 'YYYY-MM-DD').format('DD/MM/YYYY')
    },
    saveTime() {
      this.$services.AdminService.fixTime({id: this.timeDetail.id}, {
        startYear: "2021",
        endYear: "2022",
        semester: "1",
        startTimeStudent : moment().format(this.temp.startTimeStudent),
        endTimeStudent : moment().format(this.temp.endTimeStudent),
        startTimeMonitor : moment().format(this.temp.startTimeMonitor),
        endTimeMonitor : moment().format(this.temp.endTimeMonitor),
        startTimeHeadMaster : moment().format(this.temp.startTimeHeadMaster),
        endTimeHeadMaster : moment().format(this.temp.endTimeHeadMaster),
        startTimeDepartment : moment().format(this.temp.startTimeDepartment),
        endTimeDepartment : moment().format(this.temp.endTimeDepartment),
        status: this.timeDetail.status
      })
      .then( () => {
        this.$emit('done-edit', this.timeDetail)
        this.dialog = false
      })
    },
    saveDateSV(date){
      this.timeDetail.tgSV =this.formatDate(date[0], date[1])
      this.temp.startTimeStudent = date[0]
      this.temp.endTimeStudent = date[1]
      this.$refs.menuSV.save(date)
    },
    saveDateLT(date){
      this.timeDetail.tgLT =this.formatDate(date[0], date[1])
      this.temp.startTimeMonitor = date[0]
      this.temp.endTimeMonitor = date[1]
      this.$refs.menuLT.save(date)
    },
    saveDateGV(date){
      this.timeDetail.tgGV =this.formatDate(date[0], date[1])
      this.temp.startTimeHeadMaster = date[0]
      this.temp.endTimeHeadMaster = date[1]
      this.$refs.menuGV.save(date)
    },
    saveDateK(date){
      this.timeDetail.tgK =this.formatDate(date[0], date[1])
      this.temp.startTimeDepartment = date[0]
      this.temp.endTimeDepartment = date[1]
      this.$refs.menuK.save(date)
    },
  }
}
</script>

<style scoped>
</style>

<!--Khi nhận được tín hiệu từ component cha thì sẽ gán item vào timeDetail-->
<!--Nếu không gán thì khi thay đổi ở component con, chưa click đồng ý thì hệ thống
 đã emit và thay đổi thông tin
 ở component cha rồi-->

