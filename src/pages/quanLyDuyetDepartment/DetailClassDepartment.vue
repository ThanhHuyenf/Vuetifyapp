<template>
  <div>
    <Header :title="title">
      <div slot="data">
        lopppsadppsfjsdfk
      </div>
    </Header>
  </div>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: "DetailClassKhoa",
  components: {Header},
  data() {
    return {
      title: "Thong tin chi tiet lop"
    }
  }
}
</script>

<style scoped>

</style>
