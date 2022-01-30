<template>
  <div>
    <v-dialog v-model="dialog"
              persistent
              width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Them thoi gian cham diem ren luyen
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
    openDialog(){
      this.dialog= true
    }
  }
}
</script>

<style scoped>

</style>
