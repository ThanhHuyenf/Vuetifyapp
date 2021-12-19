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
                              value="timeDetail.hocKy"
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
                  v-model="dateSVRangeText"
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
                  @click="$refs.menuSV.save(dateSV)"
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
                  v-model="dateLTRangeText"
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
                  @click="$refs.menuLT.save(dateLT)"
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
                  v-model="dateGVRangeText"
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
                  @click="$refs.menuGV.save(dateGV)"
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
                  v-model="dateKRangeText"
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
                  @click="$refs.menuK.save(dateK)"
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
      menuSV: false,
      menuLT: false,
      menuGV: false,
      menuK: false,
      timeDetail: {
        stt: null,
        namHoc: '',
        hocKy: null,
        tgSV: '',
        tgLT: '',
        tgGV: '',
        tgK: '',
      },
      dateSV: [],
      dateLT: [],
      dateGV: [],
      dateK: []
    }
  },
  computed: {
    dateSVRangeText() {
      return this.formatDate(this.dateSV[0], this.dateSV[1])
    },
    dateLTRangeText() {
      return this.formatDate(this.dateLT[0], this.dateLT[1])
    },
    dateGVRangeText() {
      return this.formatDate(this.dateGV[0], this.dateGV[1])
    },
    dateKRangeText() {
      return this.formatDate(this.dateK[0], this.dateK[1])
    },
  },
  methods: {
    openDialog(item) {
      if (this.type === "update") {
        this.timeDetail = this.$lodash.clone(item)

        this.dateSV = this.timeDetail.tgSV.split(' - ').map(item => this.formatDate1(item))
        this.dateLT = this.timeDetail.tgLT.split(' - ').map(item => this.formatDate1(item))
        this.dateGV = this.timeDetail.tgGV.split(' - ').map(item => this.formatDate1(item))
        this.dateK = this.timeDetail.tgK.split(' - ').map(item => this.formatDate1(item))

      }
      this.dialog = true
    },

    formatDate(date1, date2) {
      return moment(date1, 'YYYY-MM-DD').format('DD/MM/YYYY') + ' - '
          + moment(date2, 'YYYY-MM-DD').format('DD/MM/YYYY')
    },
    formatDate1(date) {
      return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD')

    },
    saveTime() {
      this.timeDetail.tgSV = this.dateSVRangeText
      this.timeDetail.tgLT = this.dateLTRangeText
      this.timeDetail.tgGV = this.dateGVRangeText
      this.timeDetail.tgK = this.dateKRangeText

      this.$emit('done-edit', this.timeDetail)
      this.dialog = false
    }
  }
}
</script>

<style scoped>
</style>

<!--Khi nhận được tín hiệu từ component cha thì sẽ gán item vào timeDetail-->
<!--Nếu không gán thì khi thay đổi ở component con, chưa click đồng ý thì hệ thống
 đã emit và thay đổi thông tin ở component cha rồi-->

