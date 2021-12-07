<template>
  <div class="text-center red--text">
    <p>Bạn còn {{ displayDays }} ngày {{ displayHours }} giờ {{ displayMinutes }} phút để chấm điểm</p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props:["year", "month", "date", "hours", "minute"],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes(){
      return this._seconds*60
    },
    _hours(){
      return this._minutes*60
    },
    _days(){
      return this._hours*24
    },
    end(){
      return new Date(
          this.year,
          this.month,
          this.date,
          this.hours,
          this.minute
      )
    }
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    formatNum: num => (num<10 ? "0"+num : num),
    showRemaining(){
      // eslint-disable-next-line no-unused-vars
      const timer= setInterval(()=>{
        const now= new Date()
        const distance = this.end.getTime() - now.getTime()

        if(distance< 0){
          clearInterval(timer)
          return
        }

        const days= Math.floor(distance/this._days)
        const hours= Math.floor((distance%this._days)/this._hours)
        const minutes= Math.floor((distance%this._hours)/this._minutes)

        this.displayMinutes= this.formatNum(minutes)
        this.displayHours= this.formatNum(hours)
        this.displayDays= this.formatNum(days)

      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
