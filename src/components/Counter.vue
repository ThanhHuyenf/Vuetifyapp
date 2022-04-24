<template>
  <div class="text-center red--text">
    <div v-if="availableForMark">
      <p>Bạn còn {{ displayDays }} ngày {{ displayHours }} giờ {{ displayMinutes }} phút để chấm điểm</p>
    </div>
    <div v-else>
      <p>Thời gian chấm điểm đã hết</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import moment from "moment";

export default {
  name: "Counter",
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      available: false,
      starTime: {},
      endTime: {},
    }
  },
  computed: {
    tag() {
      return this.$store.state.tag
    },
    availableForMark(){
      return this.$store.state.availableForMark
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions(['getTag']),
    getData() {
      this.$services.AdminService.setupTime()
          .then(res => {
            console.log("time", res)
            switch (this.tag.role) {
              case "Student":
                this.starTime = res.body.startTimeStudent
                this.endTime = res.body.endTimeStudent
                break;
              case "Monitor":
                if (this.$route.path == "/listMembersMonitor") {
                  this.starTime = res.body.startTimeMonitor
                  this.endTime = res.body.endTimeMonitor
                } else {
                  this.starTime = res.body.startTimeStudent
                  this.endTime = res.body.endTimeStudent
                }
                break;
              case "Teacher":
                this.starTime = res.body.startTimeHeadMaster
                this.endTime = res.body.endTimeHeadMaster
                break;
              case "Department":
                this.starTime = res.body.startTimeDepartment
                this.endTime = res.body.endTimeDepartment
                break;
            }

            //Đoạn này kiểm tra xem còn thời gian ko
            var d = new Date()
            //Đoạn này tính khoảng cách của thời gian hiện tại với startTime
            var mileStone1 = moment.duration(moment(d).diff(moment(this.starTime)));
            console.log("mileStone1", mileStone1._milliseconds)
            //Đoạn này tính khoảng cách của thời gian hiện tại với endTime
            var mileStone2 = moment.duration(moment(this.endTime).diff(moment(d)));

            if(mileStone1._milliseconds > 0 && mileStone2._milliseconds > 0){
              // console.log("hihihi")
              this.$store.commit('SET_AVAILABLEFORMARK')
              this.displayDays = mileStone2._data.days
              this.displayHours = mileStone2._data.hours
              this.displayMinutes = mileStone2._data.minutes
            } else {
              this.$store.commit("SET_UNAVAILABLEFORMARK")
              // console.log("hahskdhihihi")

            }
            // console.log( "this.available", this.available)
          })
    },
  }
}
</script>

<style scoped>

</style>
