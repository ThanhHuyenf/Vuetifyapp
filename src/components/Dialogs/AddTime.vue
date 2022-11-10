<template>
  <div>
    <v-dialog v-model="dialog"
              persistent
              width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Cài đặt thời gian chấm điểm rèn luyện
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-row>
            <v-col cols="6">
              <v-text-field label="Năm học" v-model="newTime.namHoc"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Học kỳ"
                            v-model="timeDetail.semester">
              </v-text-field>
            </v-col>
          </v-row>
          <!--
               menuSV: quản lý datepicker của sv-->
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
                  v-model="newTime.tgSV"
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
                  v-model="newTime.tgLT"
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
                  v-model="newTime.tgGV"
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
                  v-model="newTime.tgK"
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
                  @click="cancel"
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
              @click="dialog = false"
          >
            Huỷ
          </v-btn>
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
  name: "DialogAddTime",
  data(){
    return {
      dialog: false,
      newTime: [],
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
    formatDate(date1, date2) {
      return moment(date1, 'YYYY-MM-DD').format('DD/MM/YYYY') + ' - '
          + moment(date2, 'YYYY-MM-DD').format('DD/MM/YYYY')
    },
    openDialog(){
      this.dialog= true
    },
    cancel(){
      this.dialog = false
    },
    saveDateSV(date){
      this.newTime.tgSV =this.formatDate(date[0], date[1])
      this.dateSV= false
      this.$refs.menuSV.save(date)
    },
    saveDateLT(date){
      this.newTime.tgLT =this.formatDate(date[0], date[1])
      this.dateLT = false
      this.$refs.menuLT.save(date)
    },
    saveDateGV(date){
      this.newTime.tgGV =this.formatDate(date[0], date[1])
      this.dateGV= false
      this.$refs.menuGV.save(date)
    },
    saveDateK(date){
      this.newTime.tgK =this.formatDate(date[0], date[1])
      this.dateK= false
      this.$refs.menuK.save(date)
    },
    saveTime(){
      return
    }
  }
}
</script>

<style scoped>

</style>
