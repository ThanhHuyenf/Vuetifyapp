<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-chart :options="chartOptionBar"></v-chart>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "DetailClassReviewDepartment",
  components: {Header},
  data(){
    return {
      title: "Chi tiết điểm rèn luyện",
      chartOptionBar:{
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
