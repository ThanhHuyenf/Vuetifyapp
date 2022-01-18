<template>
  <div>
    <Header :title="title">
      <div slot="data">
        hihihiii
      </div>
    </Header>
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: "FormDiemLT",
  components: {Header},
  data(){
    return {
      title: "Chấm điểm thành viên"
    }
  }
}
</script>

<style scoped>

</style>
